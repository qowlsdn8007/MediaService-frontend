import { rest } from 'msw';

const profile_handler = [
    rest.get('/api/v1/profiles/{id}', (req, res, ctx) => {
        
        return res(
            ctx.json(
                {
                    main_image: "string",
                    name: "string",
                    rate: "string",
                    user: {
                        email: "string",
                        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                        password: "string",
                        role: "ADMIN"
                    },
                }
            ),
        );
    }),

    rest.get("/api/v1/profiles/sign-in/1", (req, res, ctx) => {

        return res(
            ctx.json(
                [
                    {
                        main_image: "https://occ-0-2219-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41",
                        name: "이민수",
                        rate: "19",
                        id: "dda06106-45d3-49b5-adaa-9e899656ee44"
                    },
                    {
                        main_image: "https://occ-0-2219-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWu33TcylnaLZwSdtgKR6mr0O63afqQLxZbzHYQZLkCJ9bgMTtsf6tzs_ua2BuTpAVPbhxnroiEA-_bqJmKWiXblO9h-.png?r=f71",
                        name: "고광표",
                        rate: "15",
                        id: "9cf10e5a-2609-465f-9b05-76030ebcebb5"
                    },
                    {
                        main_image: "https://occ-0-2219-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeUqbfriC_pGWtwTa1KOx-ZSiQYa7ltLkOuduGxY_GRRc41ugYJNGYHe4LNcmshST4qkRSENvcs2xFomPc0rtX8wq2NG.png?r=b97",
                        name: "우창혁",
                        rate: "19",
                        id: "ce4027d9-8a92-43f6-996a-05451bfdc025"
                    },
                    {
                        main_image: "https://occ-0-2219-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX_cjFqekMWlVv9AS6vI54p7W5uxkdnDz0RZ_BWg2XRBOMNYXnJRhtOnpMappsaT2-4TP8mjyaBTNLX-mLEJHl8GIfn_.png?r=fcc",
                        name: "김영민",
                        rate: "19",
                        id: "d1616e48-57d0-4fab-9759-7d09176ed2a1",
                    },
                ]
            ),
        );
    }),


];

export default profile_handler;