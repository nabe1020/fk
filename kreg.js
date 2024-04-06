const endPoint = 'https://script.google.com/macros/s/AKfycbyxVh84MzVv0ng2VfSlWfjWi8qc8bI2ROFYSQfBjCJMGXYDFWeT7NU0G0d0BI6GcRNrRg/exec';

async function post(message, param) {
    const data = {
        message: message,
        param: param
    };
    const response = await fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({ data: data }),
    });
    return await response.json();
}

async function logClient(log) {
    const message = 'logClient';
    const param = {
        log: log,
    };
    return post(message, param);
}

async function getAllKids(idToken) {
    const message = 'getAllKids';
    const param = {
        idToken: idToken,
    };
    return post(message, param);
}

async function getData() {
    // const idToken = liff.getIDToken();
    const data = {
        message: 'getAllKids',
    /*
        param: {
            idToken: idToken,
        },
    */
    };
    console.log('getData');
    const resA = await fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({ data: data }),
    })
    console.log('response A', resA);
    const json = await resA.json();
    console.log('response Json', json);
};
