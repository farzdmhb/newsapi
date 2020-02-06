$(function () {
    var model = new NEWSModel();
        view = new NEWSView(model,1);
        controller = new NEWSController(model, view,1);
});
