import * as O from "fp-ts/Option";
import * as A from "fp-ts/Array";
import BigNumber from "bignumber.js";

import {
  ProposalsList,
  ProposalCard,
  ProposalCardId,
  ProposalCardInfoContainer,
  ProposalCardStatusContainer,
  ProposalCardStatusInfo,
  ProposalCardText,
  ProposalCardVotesContainer,
  ProposalsContainer,
} from "./Proposals.components";
import { useAppDispatch, useAppSelector } from "store";
import { useCallback, useEffect, useState } from "react";
import { ProposalDetails } from "./ProposalDetails";
import {
  Proposal,
  ProposalsState,
  fetchProposals,
  setActiveProposal,
} from "slices/proposals";
import { pipe } from "fp-ts/lib/function";
import { Select } from "@namada/components";

const getStatus = (proposal: Proposal): string => {
  return proposal.status;
};

const ProposalCardVotes = ({
  yes,
  total,
}: {
  yes: string;
  total: string;
}): JSX.Element => {
  const yesNo = new BigNumber(yes);
  const totalNo = new BigNumber(total);

  const yesPercentage = yesNo.div(totalNo).times(100).toNumber();
  const noPercentage = 100 - yesPercentage;

  return (
    <ProposalCardVotesContainer
      title={`Yes: ${yes}, Total: ${total} (${yesPercentage.toFixed(2)})%`}
      yes={yesPercentage}
      no={noPercentage}
    />
  );
};

export const Proposals = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { proposals, activeProposalId } = useAppSelector<ProposalsState>(
    (state) => state.proposals
  );

  const [status, setStatus] = useState<"ongoing" | "finished" | "upcoming">("ongoing");

  useEffect(() => {
    if (!proposals || proposals.length === 0)
      setTimeout(() => dispatch(fetchProposals({ status })), 3000);
    dispatch(fetchProposals({ status }));
  }, [status]);

  const onProposalClick = useCallback((proposalId: string) => {
    console.log("onProposalClick", proposalId);
    dispatch(setActiveProposal(proposalId));
  }, []);

  const onDetailsClose = useCallback(() => {
    dispatch(setActiveProposal());
  }, []);

  const maybeProposal = pipe(
    proposals,
    A.findFirst((p) => p.id === activeProposalId)
  );
  console.log("maybeProposal", maybeProposal);
  console.log(O.isSome(maybeProposal));
  return (
    <ProposalsContainer style={{ padding: "10px" }}>
      <h1>Proposals</h1>
      <br></br>
      <Select
        data={[{ value: "finished", label: "Finished" }, { value: "ongoing", label: "Ongoing" }, { value: "upcoming", label: "Upcoming" }]}
        value={status}
        label="Status"
        onChange={(e) => { setStatus(e.target.value as any) }}
      />
      <br></br>
      <ProposalsList data-testid="proposals-list">
        {[...proposals].reverse().map((proposal, i) => (
          <ProposalCard key={i} onClick={() => onProposalClick(proposal.id)}>
            <ProposalCardStatusContainer>
              <ProposalCardStatusInfo className={getStatus(proposal)}>
                {getStatus(proposal)}
              </ProposalCardStatusInfo>
            </ProposalCardStatusContainer>
            <ProposalCardInfoContainer>
              <ProposalCardText>
                <ProposalCardId>{"#" + proposal.id}</ProposalCardId>
                {proposal.content.title && `${proposal.content.title}: `}
                {proposal.content.details || ""}
              </ProposalCardText>
              {proposal.status === "ongoing" && (
                <ProposalCardVotes
                  yes={proposal.totalYayPower.toString()}
                  total={proposal.totalVotingPower.toString()}
                />
              )}
            </ProposalCardInfoContainer>
          </ProposalCard>
        ))}
      </ProposalsList>
      <ProposalDetails
        open={O.isSome(maybeProposal)}
        onClose={onDetailsClose}
        maybeProposal={maybeProposal}
      />
    </ProposalsContainer>
  );
};
