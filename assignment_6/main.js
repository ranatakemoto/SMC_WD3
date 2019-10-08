$(document).ready(function () {
    $("#sameAddress").on("change", function () {
        if (this.checked) {
            $("[name='shipping_first_name']").val($("[name='first_name']").val());
            $("[name='shipping_last_name']").val($("[name='last_name']").val());
            $("[name='shipping_email_address']").val($("[name='email_address']").val());
            $("[name='shipping_address_1']").val($("[name='billing_address_1']").val());
            $("[name='shipping_address_2']").val($("[name='billing_address_2']").val());
            $("[name='shipping_city']").val($("[name='billing_city']").val());
            $("[name='shipping_state']").val($("[name='billing_state']").val());
            $("[name='shipping_zip']").val($("[name='billing_zip']").val());
        }
    }); // end on

    $("#differentAddress").on("change", function () {
        if (this.checked) {
            $("[name='shipping_first_name']").val('');
            $("[name='shipping_last_name']").val('');
            $("[name='shipping_email_address']").val('');
            $("[name='shipping_address_1']").val('');
            $("[name='shipping_address_2']").val('');
            $("[name='shipping_city']").val('');
            $("[name='shipping_state']").val('');
            $("[name='shipping_zip']").val('');
        }
    }); // end on


    var cityDropdown = document.getElementById('city');
    var stateDropdown = document.getElementById('state');

    cityDropdown.addEventListener('change', function () {
        if (this.value === '1')
            stateDropdown.innerHTML = '<option value="' + stateDropdown[0] + '">' + "California" + '</option>';
        if (this.value === '2')
            stateDropdown.innerHTML = '<option value="' + stateDropdown[1] + '">' + "New York" + '</option>';
        if (this.value === '3')
            stateDropdown.innerHTML = '<option value="' + stateDropdown[2] + '">' + "Arizona" + '</option>';
    }); // end billing state dropdown

    var cityDropdown2 = document.getElementById('shipping_city');
    var stateDropdown2 = document.getElementById('shipping_state');

    cityDropdown2.addEventListener('change', function () {
        if (this.value === '1')
            stateDropdown2.innerHTML = '<option value="' + stateDropdown2[0] + '">' + "California" + '</option>';
        if (this.value === '2')
            stateDropdown2.innerHTML = '<option value="' + stateDropdown2[1] + '">' + "New York" + '</option>';
        if (this.value === '3')
            stateDropdown2.innerHTML = '<option value="' + stateDropdown2[2] + '">' + "Arizona" + '</option>';
    }); // end shipping state dropdown




}); // end ready