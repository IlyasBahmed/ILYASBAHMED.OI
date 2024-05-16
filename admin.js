function getOrders() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                var orders = JSON.parse(xhr.responseText);
                displayOrders(orders);
            } else {
                console.error('Failed to fetch orders');
            }
        }
    };
    xhr.open('GET', 'url_to_orders_data', true); // استبدل 'url_to_orders_data' بعنوان URL الصحيح
    xhr.send();
}

// دالة لعرض بيانات الطلبيات في جدول
function displayOrders(orders) {
    var tbody = document.getElementById('ordersTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // مسح أي بيانات قديمة

    // إضافة كل طلب إلى الجدول
    orders.forEach(function(order) {
        var row = tbody.insertRow();
        var orderNumberCell = row.insertCell(0);
        var orderDateCell = row.insertCell(1);
        var productCell = row.insertCell(2);
        var quantityCell = row.insertCell(3);

        orderNumberCell.innerText = order.orderNumber;
        orderDateCell.innerText = order.orderDate;
        productCell.innerText = order.product;
        quantityCell.innerText = order.quantity;
    });
}

// النقر على زر "عرض الطلبيات"
viewOrdersBtn.onclick = function() {
    getOrders(); // جلب بيانات الطلبيات عند النقر
}