function openPrevPage(){
	window.open("?page="+(page*1-1),"_self");
}
function openNextPage(){
	window.open("?page="+(page*1+1),"_self");
}

const urlParams = new URLSearchParams(window.location.search);
var page = urlParams.get('page');
if(!page) page = 1;

var tmpStr = "";
var firstPage = 1;
var lastPage = Math.max(1,Math.floor((lectures.length-1)/10+1));
if(page > lastPage) page = lastPage;

for(var i=(page-1)*10; i<Math.min(page*10,lectures.length); i++) tmpStr += lectures[i];

if(tmpStr == "") tmpStr = "<p>Nothing to show here.</p>";

$("#lectures").html(tmpStr);
$("#pageIndicator").html("Page " + page + " of " + lastPage);
if(page <= firstPage) $("#prevPage").addClass("disabled");
if(page >= lastPage) $("#nextPage").addClass("disabled");
