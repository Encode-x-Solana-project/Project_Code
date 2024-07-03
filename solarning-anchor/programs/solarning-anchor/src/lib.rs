use anchor_lang::prelude::*;

declare_id!("6YnKHehtGaDoHE8zukL9LEWv22nssKDbZ5hT4E2d2cmp");

#[program]
pub mod solarning_anchor {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }

    //Sync progress

    //jump to stage

    //Deliver NFT completion badges

    //
}

#[derive(Accounts)]
pub struct Initialize {}
