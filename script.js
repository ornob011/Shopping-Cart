const ItemPriceOne = parseFloat(document.getElementById("ItemPrice1").innerText);
const ItemPriceTwo = parseFloat(document.getElementById("ItemPrice2").innerText);
const Subtotal = ItemPriceOne + ItemPriceTwo;
document.getElementById("subtotal").innerText = Subtotal;

const Tax = parseFloat((Subtotal * 5 / 100).toFixed(1));
document.getElementById("tax").innerText = Tax;

const Total = Subtotal + Tax;
document.getElementById("total").innerText = Total;

document.getElementById("btnplus1").addEventListener("click", function() {
    increment("presentQtn1");
    upPriceQtn("presentQtn1", 1219, "ItemPrice1");
    upTotal("subtotal", "total", "tax");
});

document.getElementById("btnplus2").addEventListener("click", function() {
    increment("presentQtn2");
    upPriceQtn("presentQtn2", 59, "ItemPrice2");
    upTotal("subtotal", "total", "tax");
});

document.getElementById("btnminus1").addEventListener("click", function() {
    decrement("presentQtn1");
    upPriceQtn("presentQtn1", 1219, "ItemPrice1");
    upTotal("subtotal", "total", "tax");
});

document.getElementById("btnminus2").addEventListener("click", function() {
    decrement("presentQtn2");
    upPriceQtn("presentQtn2", 59, "ItemPrice2");
    upTotal("subtotal", "total", "tax");
});

document.getElementById("remove1").addEventListener("click", function() {

    AfterRemove("item1", "ItemPrice1", "subtotal", "tax", "total");

    document.getElementById("btnplus2").addEventListener("click", function() {
        upTotalAfterRemove("ItemPrice2", "subtotal");
        upTotal("subtotal", "total", "tax");
    });

    document.getElementById("btnminus2").addEventListener("click", function() {
        upTotalAfterRemove("ItemPrice2", "subtotal");
        upTotal("subtotal", "total", "tax");
    });


});

document.getElementById("remove2").addEventListener("click", function() {
    AfterRemove("item2", "ItemPrice2", "subtotal", "tax", "total");

    document.getElementById("btnplus1").addEventListener("click", function() {
        upTotalAfterRemove("ItemPrice1", "subtotal");
        upTotal("subtotal", "total", "tax");
    });

    document.getElementById("btnminus1").addEventListener("click", function() {
        upTotalAfterRemove("ItemPrice1", "subtotal");
        upTotal("subtotal", "total", "tax");
    });

});

function increment(id) {
    const present = parseFloat(document.getElementById(id).value);
    const updated = present + 1;
    document.getElementById(id).value = updated;
}

function decrement(id) {
    const present = parseFloat(document.getElementById(id).value);

    if (present > 1) {
        const updated = present - 1;
        document.getElementById(id).value = updated;
    }
}

function upPriceQtn(Quantity, GivenPrice, price) {
    const present = document.getElementById(Quantity).value;

    const CurrentPrice = present * GivenPrice;

    document.getElementById(price).innerText = CurrentPrice;

    updateSubtotal("ItemPrice1", "ItemPrice2", "subtotal");
}

function updateSubtotal(price1, price2, subTotal) {
    const currentPrice1 = document.getElementById(price1).innerText;

    const currentPrice2 = document.getElementById(price2).innerText;

    document.getElementById(subTotal).innerText = parseFloat(currentPrice1) + parseFloat(currentPrice2);
}


function upTotalAfterRemove(price, subTotalID) {
    const presentTotal = parseFloat(document.getElementById(price).innerText);

    document.getElementById(subTotalID).innerText = presentTotal;
}

function upTotal(subTotalID, totalID, taxID) {
    const presentTotal = parseFloat(document.getElementById(subTotalID).innerText);

    const tax = parseFloat(presentTotal * 5 / 100).toFixed(1);

    const total = parseFloat(presentTotal) + parseFloat(tax);

    document.getElementById(taxID).innerText = tax;

    document.getElementById(totalID).innerText = total;
}

function AfterRemove(cartID, priceID, subTotalID, taxID, totalID) {

    document.getElementById(cartID).style.display = "none";

    const Price1 = parseFloat(document.getElementById(priceID).innerText);

    const presentTotal = parseFloat(document.getElementById(subTotalID).innerText);

    const afterTotal = presentTotal - Price1;

    document.getElementById(subTotalID).innerText = afterTotal;

    const afterRemoveTax = parseFloat(afterTotal * 5 / 100);

    document.getElementById(taxID).innerText = afterRemoveTax;

    document.getElementById(totalID).innerText = afterTotal + afterRemoveTax;
}