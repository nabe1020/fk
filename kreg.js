function makeRegisterJson(name, grade) {
        const json = {
            message: 'register',
            params: {
                name: name,
                grade: grade
            }
        };
        return json;
}

async function getData() {
    const endPoint = 'https://script.google.com/macros/s/AKfycbyxVh84MzVv0ng2VfSlWfjWi8qc8bI2ROFYSQfBjCJMGXYDFWeT7NU0G0d0BI6GcRNrRg/exec';
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
