//const host = "http://localhost/fb_selling_supporter/index.php";
const host = "http://scanfb.top/fb_selling_supporter/index.php"

export default function callServices(action, payload, callback) {
    fetch(host, {
        method: "POST",
        body: JSON.stringify({
            action: action,
            payload: payload,
        }),
    })
        .then((res) => res.json())
        .then((json) => callback(json))
        .catch((error) => {
            alert(JSON.stringify(error));
        });
}