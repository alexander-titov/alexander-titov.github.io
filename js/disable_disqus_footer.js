/*
* Disable the nasty footer of DISQUS
*
* It is added by DISQUS after the comment section and visually conflicts
* with the original footer of a page.
*
* Note: as we do not control the class name and id of that element,
* it may be changed in the future and the following code will stop
* working. In this case, check the new class name and/or id and update
* the code below.
*/
(function() {
var disqus_footer = document.getElementById("footer").getElementsByClassName("disqus-footer__wrapper").getElementsByTagName("div");
disqus_footer.style.display = "none";
})();
