import express from 'express';

import { AuthUser } from '@supermono/core';

const app = express();
const port = 3001;

app.get("/data", (req, res) => {
    res.json({ foo: "bar" });
});

app.listen(port, () => {
    const user:AuthUser = {
        userName: 'Superman',
        authenticated: false
    };
    console.log(JSON.stringify(user,null,3));
    console.log(`Example app listening at http://localhost:${port}`);
});
