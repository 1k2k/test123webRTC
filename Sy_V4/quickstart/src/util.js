LoadingBox = function() {
    this.show = function() {
        if ($('#loading').is(':visible')) {
            return;
        }
        $("#loading").fadeIn(500);;
    };
    this.hide = function() {
        $("#loading").fadeOut(500);;
    };
};
var oLoadingDiv = new LoadingBox();

module.exports = oLoadingDiv;