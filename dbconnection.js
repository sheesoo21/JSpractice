findOne: async function (username) {
        /**입력받은 username값이 존재하지않는다면, db를 연결시키지않고 return */
        if (!username || '') return;
        let connection;
        
        try {
        /**
         * parameter로 받은 conn을 리턴하여 connection 변수에 넣어줌
         */
            connection = await connectionPool.getConnection(conn => conn)
        } catch (error) {
            /**Connection Error 발생시 error 반환 */
            return error;
        }

        try {
            const query = 'SELECT * FROM users where username = ?';
            
            const [rows] = await connection.query(query, [username]);
            return rows[0]
        } catch (error) {
            /** query 문제가 발생하였다면 error를 반환 */
            return error
        } finally {
            //쿼리 처리가 끝났다면 무조건 반환해주어야함
            await connection.release()
        }
    }