document.getElementById('kmInput').addEventListener('input', function(e){
    let km = e.target.value;

    document.getElementById('metersOutput').innerHTML = km * 1000;
    document.getElementById('smOutput').innerHTML = km * 100000;
    document.getElementById('msOutput').innerHTML = km * 1000000;
})