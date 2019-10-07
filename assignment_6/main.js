$(document).ready(function(){
    $("#sameAddress").on("change", function(){
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
    });// end on

    $("#differentAddress").on("change", function(){
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
    });// end on

    

    $("#city").change(function(){
        $("#state").val() === this.val();
    });
    

}); // end ready