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

async function getAllKids(channelId, idToken) {
    const message = 'getAllKids';
    const param = {
        channelId: channelId,
        idToken: idToken
    };
    return post(message, param);
}

async function addKid(channelId, idToken, name, grade) {
    const message = 'addKid';
    const param = {
        channelId: channelId,
        idToken: idToken,
        name: name,
        grade: grade
    };
    return post(message, param);
}

async function deleteKid(channelId, id) {
    const message = 'deleteKid';
    const param = {
        channelId: channelId,
        id: id
    };
    return post(message, param);
}
