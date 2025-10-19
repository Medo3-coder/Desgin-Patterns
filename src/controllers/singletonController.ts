import {Router} from 'express';
import DatabaseSingleton from '../patterns/Singlton/DatabaseSingleton.js';

const router = Router();

router.get('/' , (req  , res ) => {
    const db1 = DatabaseSingleton.getInstance();
    const db2 = DatabaseSingleton.getInstance();
    // console.log("DB1 Connection String: ", db1.getConnection());
    // console.log("DB2 Connection String: ", db2.getConnection());
    // console.log("Are both instances same? ", db1 === db2);

    res.json({
        connection: db1.getConnection(),
        connection2: db2.getConnection(),
        sameInstance: db1 === db2
    });
});


export default router;