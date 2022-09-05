
//新建一个 ajax 函数
export const ajax = (method, url, data, callback) =>{
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = xhr.responseText;
                try {
                    response = JSON.parse(response)
                } catch (error) {
                    //
                }
                callback(response)
            }
        }
    }
    xhr.send(JSON.stringify(data))

}