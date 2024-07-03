use std::string;

use anchor_lang::prelude::*;

declare_id!("6YnKHehtGaDoHE8zukL9LEWv22nssKDbZ5hT4E2d2cmp");

#[program]
pub mod solarning_anchor {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }

    //Update progress

    pub fn update_progress(ctx: Context<UpdateProgress>) -> Result<()> {
        let user = &mut ctx.accounts.user;
        //user.progress = String::from(""); // Example: setting progress to true
        Ok(())
    }

    //jump to stage

    //Deliver NFT completion badges

    //
}

#[derive(Accounts)]
pub struct Initialize {}


#[derive(Accounts)]
pub struct UpdateProgress<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct User {
    pub progress: String,
}