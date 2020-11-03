function func1(a)
{
    return a;
}

function func2(a, b)
{
    return a + b;
}

function func3()
{
    var dat = [ '-', 1, 2, 3, '-'];
    console.log(dat);
    for (var i = 0; i < dat.length; i++)
    if (isNaN(dat[i]))
        dat[i] = 0;
    else
        dat[i] = dat[i] * dat[i];
    console.log(dat);
}


function func4(src)
{
	document.getElementById('image').src = src;
}