import { IdlAccounts, Program } from "@coral-xyz/anchor";
import { IDL, SolarningAnchor } from "./idl";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

const programId = new PublicKey("4Uuqg7nMNZR7kE9oAV2k3MopzNRYsyRvyqhRDVZcYNdZ");
const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

// Initialize the program interface with the IDL, program ID, and connection.
// This setup allows us to interact with the on-chain program using the defined interface.
export const program = new Program<SolarningAnchor>(IDL, programId, {
    connection,
});

export const SolarningAnchorPDA = PublicKey.findProgramAddressSync(
    [Buffer.from("SolarningAnchor")],
    program.programId,
);

// This is just a TypeScript type for the SolarningAnchor data structure based on the IDL
// We need this so TypeScript doesn't yell at us
export type SolarningAnchorData = IdlAccounts<SolarningAnchor>["SolarningAnchor"];
