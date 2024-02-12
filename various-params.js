/**
 * for a given sring tell me whether it has even number or not.
 */

function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('Even size')
        return true;
    }
    else{
        console.log('Odd size')
        return false;
    }

}

// evenSizedString('Dhaka');
// evenSizedString('faka');

function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));


function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

// console.log(numberOfElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function getAge(person){
    const age = person
    return age;
}