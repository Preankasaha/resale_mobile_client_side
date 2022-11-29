import { useEffect, useState } from "react";

const useToken = email => {
    const [customToken, setCustomToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('resaleMobileToken', data.accessToken);
                        setCustomToken(data.accessToken);
                    }
                });
        }
    }, [email]);
    return [customToken];
}

export default useToken;