const input = document.getElementById('input')
const btn = document.querySelector('.btn')

function butn () {
    if (input.value.trim() === ''){
        return false
    } else {
        let m = []
        m.push(input.value)
        m.forEach((u) => {
            const p = document.createElement('p')
            document.body.append(p)
            p.append(u.split('').reverse().join())
        })
    }
}

btn.onclick = () => butn()