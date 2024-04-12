import BigNumber from "bignumber.js";
import { useCallback, useEffect, useState } from "react";

import {
  ActionButton,
  Input,
  Select,
  Table,
  TableConfigurations,
  TableLink,
} from "@namada/components";
import { useDebounce } from "@namada/hooks";
import { assertNever, formatPercentage, truncateInMiddle } from "@namada/utils";

import {
  StakingAndGovernanceState,
  Validator,
} from "slices/StakingAndGovernance";
import { fetchTotalBonds, fetchValidatorDetails } from "slices/StakingAndGovernance/actions";
import { useAppDispatch, useAppSelector } from "store";
import { ValidatorsCallbacks } from "../StakingOverview";
import {
  AllValidatorsSearchBar,
  AllValidatorsSubheadingContainer,
  Paginator,
} from "./AllValidatorsTable.components";
import { InputContainer } from "App/Token/TokenSend/TokenSendForm.components";

const ITEMS_PER_PAGE = 25;

// AllValidators table row renderer and configuration
// it contains callbacks defined in AllValidatorsCallbacks
const AllValidatorsRowRenderer = (
  validator: Validator,
  callbacks?: ValidatorsCallbacks
): JSX.Element => {
  return (
    <>
      <td>
        <TableLink
          onClick={() => {
            callbacks && callbacks.onClickValidator(validator.name);
          }}
        >
          {truncateInMiddle(validator.name, 10, 16)}
        </TableLink>
      </td>
      <td>{validator.votingPower?.toString() ?? ""}</td>
      <td>{formatPercentage(validator.commission)}</td>
    </>
  );
};

const getAllValidatorsConfiguration = (
  navigateToValidatorDetails: (validatorId: string) => void,
  onColumnClick: (column: AllValidatorsColumn) => void,
  sort: Sort
): TableConfigurations<Validator, ValidatorsCallbacks> => {
  const getLabelWithTriangle = (column: AllValidatorsColumn): string => {
    let triangle = "";
    if (sort.column === column) {
      if (sort.ascending) {
        triangle = " \u25b5"; // white up-pointing small triangle
      } else {
        triangle = " \u25bf"; // white down-pointing small triangle
      }
    }

    return `${column}${triangle}`;
  };

  return {
    rowRenderer: AllValidatorsRowRenderer,
    callbacks: {
      onClickValidator: navigateToValidatorDetails,
    },
    columns: [
      {
        uuid: "1",
        columnLabel: getLabelWithTriangle(AllValidatorsColumn.Validator),
        width: "45%",
        onClick: () => onColumnClick(AllValidatorsColumn.Validator),
      },
      {
        uuid: "2",
        columnLabel: getLabelWithTriangle(AllValidatorsColumn.VotingPower),
        width: "25%",
        onClick: () => onColumnClick(AllValidatorsColumn.VotingPower),
      },
      {
        uuid: "3",
        columnLabel: getLabelWithTriangle(AllValidatorsColumn.Commission),
        width: "30%",
        onClick: () => onColumnClick(AllValidatorsColumn.Commission),
      },
    ],
  };
};

const sortValidators = (sort: Sort, validators: Validator[]): Validator[] => {
  const direction = sort.ascending ? 1 : -1;

  const ascendingSortFn: (a: Validator, b: Validator) => number =
    sort.column === AllValidatorsColumn.Validator
      ? (a, b) => a.name.localeCompare(b.name)
      : sort.column === AllValidatorsColumn.VotingPower
        ? (a, b) =>
          !a.votingPower || !b.votingPower
            ? 0
            : a.votingPower.isLessThan(b.votingPower)
              ? -1
              : 1
        : sort.column === AllValidatorsColumn.Commission
          ? (a, b) => (a.commission.isLessThan(b.commission) ? -1 : 1)
          : assertNever(sort.column);

  const cloned = validators.slice();
  cloned.sort((a, b) => direction * ascendingSortFn(a, b));

  return cloned;
};

const filterValidators = (
  search: string,
  validators: Validator[]
): Validator[] =>
  search
    ? validators.filter((v) =>
      v.name.toLowerCase().includes(search.toLowerCase())
    )
    : validators;

enum AllValidatorsColumn {
  Validator = "Validator",
  VotingPower = "Voting power",
  Commission = "Commission",
}

type Sort = {
  column: AllValidatorsColumn;
  ascending: boolean;
};

export const AllValidatorsTable: React.FC<{
  navigateToValidatorDetails: (validatorId: string) => void;
}> = ({ navigateToValidatorDetails }) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const [sort, setSort] = useState<Sort>({
    column: AllValidatorsColumn.Validator,
    ascending: true,
  });
  const [itemOffset, setItemOffset] = useState(0);
  const [forcePage, setForcePage] = useState<number>();

  const { validators, validatorAssets } =
    useAppSelector<StakingAndGovernanceState>(
      (state) => state.stakingAndGovernance
    );
  const [filteredValidators, setFilteredValidators] = useState<Validator[]>([]);
  const [currentValidators, setCurrentValidators] = useState<Validator[]>([]);
  const [selectedValidator, setSelectedValidator] = useState<string>();

  const endOffset = itemOffset + ITEMS_PER_PAGE;
  const pageCount = Math.ceil(filteredValidators.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (selectedValidator)
      return;

    let prior = filteredValidators.find(x => isQuantNode(x.name)) || filteredValidators[0];

    console.log("prior", prior);
    dispatch(fetchValidatorDetails(prior?.uuid));
    setSelectedValidator(prior?.uuid);
  }, [selectedValidator, filteredValidators]);

  useEffect(() => {
    setFilteredValidators(filterValidators(debouncedSearch, validators));
    if (search) {
      // Show first page of results if search is entered
      setItemOffset(0);
      // Set to first page of paginator
      setForcePage(0);
    } else {
      setForcePage(undefined);
    }
  }, [debouncedSearch, validators, validatorAssets]);

  useEffect(() => {
    const sortedValidators = sortValidators(
      sort,
      filteredValidators.slice(itemOffset, endOffset)
    );

    setCurrentValidators(sortedValidators);
    // sortedValidators.forEach((validator) => {
    //   const { name: address } = validator;
    //   if (!validatorAssets[address]) {
    //     dispatch(fetchTotalBonds(address));
    //   }
    // });
  }, [filteredValidators, itemOffset, debouncedSearch]);

  const handleColumnClick = useCallback(
    (column: AllValidatorsColumn): void =>
      setSort({
        column,
        ascending: sort.column === column ? !sort.ascending : true,
      }),
    [sort]
  );

  const allValidatorsConfiguration = getAllValidatorsConfiguration(
    navigateToValidatorDetails,
    handleColumnClick,
    sort
  );

  const handlePageClick = ({ selected }: { selected: number }): void => {
    const newOffset = (selected * ITEMS_PER_PAGE) % validators.length;
    setItemOffset(newOffset);
  };

  const allValidators = currentValidators.map((validator) => ({
    ...validator,
    votingPower:
      validatorAssets[validator.name]?.votingPower || new BigNumber(0),
    commission: validatorAssets[validator.name]?.commission || new BigNumber(0),
  }));
  return (
    <>
      <AllValidatorsSubheadingContainer>
        <InputContainer>
          <Select<string>
            data={[...filteredValidators]
              .sort((x, _) => isQuantNode(x.name) ? -1 : 1)
              .map(v => ({ label: isQuantNode(v.name) ? "QuantNode" : v.name, value: v.uuid }))}
            value={selectedValidator!}
            label="Select Validator"
            onChange={(e) => {
              setSelectedValidator(e.target.value);
            }}
          />
        </InputContainer>
      </AllValidatorsSubheadingContainer>
      <ActionButton
        onClick={() => {
          navigateToValidatorDetails(selectedValidator!)
        }}
      >
        Delegate
      </ActionButton>
    </>
  );
};

const quantNodeAddr = "tnam1q93jk9mkqh9xlcn8g3pxvr5a6272mr2f5velpe9w";

function isQuantNode(addr: string) {
  return addr === quantNodeAddr;
}