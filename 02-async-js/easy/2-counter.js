var counter=0;

function increament()
{
    counter++;
    console.log(counter);
    setTimeout(increament,1000);
}
increament();
