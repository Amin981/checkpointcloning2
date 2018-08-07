$("#titre").click(addTitle)
$("#paragraphe").click(addParagraph)
$("#List").click(addOrderedList)
$("#Liste").click(addUnorderedList)
$("#image").click(addImage)
$("#video").click(addVideo)
$("#lien").click(addLink)
$("#audio").click(addAudio)
$("#form").click(addForm)
let i = 0

function addTitle(){
$("#code").append("<p id='title"+i+"' onclick='change(this.id,"+i+")'></p>");
$("#title"+i).text("<h1>title</h1>")
$("#preview").append("<h1 id ='"+i+"'>titre</h1></xmp>");
i++
}

function addParagraph(){
    $("#code").append("<xmp><p>ceci est une paragraphe</p></xmp>");
    $("#preview").append("<p>ceci est une paragraphe </p>");
}

function addOrderedList(){
    $("#code").append("<xmp><ol><li>liste</li><li>liste</li></ol></xmp>");
    $("#preview").append("<ol><li>liste</li><li>liste</li> </ol>");
}

function addUnorderedList(){
    $("#code").append("<xmp><ol><li>liste</li><li>liste</li> </ol></xmp>");
    $("#preview").append("<ul><li>liste</li><li>liste</li> </ul>");

}

function addImage(){
    $("#code").append("<xmp><img src='#'></xmp>");
    $("#preview").append("<img src='res/car1.jpg' ></img>");

}

function addVideo(){
    $("#code").append("<xmp><video controls autoplay> </video></xmp>");
    $("#preview").append("<video controls autoplay> </video>");

}

function addLink(){
    $("#code").append("<xmp><a  href='#'> facebook</a></xmp>");
    $("#preview").append("<a  href='https://www.facebook.com/'> facebook</a>");
}

function addAudio(){
    $("#code").append("<xmp><audio src='hype_home.mp3' controls></audio></xmp>");
    $("#preview").append("<audio src='hype_home.mp3' controls></audio>");
}

function addForm(){
    $("#code").append("<xmp><form id='myForm'></xmp>")
  $("#code").append("<xmp><span class='form_col'>Sexe:</span></xmp>")
  $("#code").append("<xmp><label><input name='sex' type='radio' value='H' />Homme</label></xmp>")
  $("#code").append("<xmp><label><input name='sex' type='radio' value='F' />Femme</label></form></xmp>")
  $("#preview").append("<form id='myForm'>")
  $("#preview").append("<span class='form_col'>Sexe:</span>")
  $("#preview").append("<label><input name='sex' type='radio' value='H' />Homme</label>")
  $("#preview").append("<label><input name='sex' type='radio' value='F' />Femme</label></form>")
}

function change(id,indice){
    let message= prompt("enter the new value")
    $("#"+id).text("<h1>"+message+"</h1>")
    document.getElementById(indice).innerHTML =  "<h1>"+message+"</h1>"
}