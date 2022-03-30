const calcu = () => {
    let b1 = document.getElementById('b1').value;
    let b2 = document.getElementById('b2').value;
    let b3 = document.getElementById('b3').value;

    let multiply = parseFloat(b1) * parseFloat(b2);
    alert(multiply);

    let prcnt = parseFloat(multiply / 100);
    b3 = alert(prcnt + "%");
}