// window.alert('works');

function changeImage () {

    var newImage = document.getElementById('photo').src = 'overwight-Labradors-Steve-Dale.jpg';

    document.getElementById('hiddenButton').style.display = 'block';

}

function changeImageBack() {

    var lastImage = document.getElementById('photo').src = 'labrador-retriever-scaled.jpg';

    document.getElementById('hiddenButton').style.display = 'none';

}
