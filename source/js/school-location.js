const districtButton = document.querySelector(".school-address__button--district");
const districtList = document.querySelector(".map__districts");
const addressHeaderButton = document.querySelector(".school-address__button--header");
const addressHeaderList = document.querySelector(".school-address__list--header");
const addressPromoButton = document.querySelector(".school-address__button--promo");
const addressPromoList = document.querySelector(".school-address__list--promo")


function addressSelect(button, list) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    list.classList.toggle("active");
  })
}

addressSelect(districtButton, districtList);
addressSelect(addressHeaderButton, addressHeaderList);
addressSelect(addressPromoButton, addressPromoList);

function schoolLocation() {
  const districts = document.querySelectorAll(".map__district");
  const addressBlocks = document.querySelectorAll(".map-info");

  function filter (category, blocks) {
    blocks.forEach((block) => {
      const isBlockFiltered = block.classList.contains(category);
      if (isBlockFiltered) {
        block.classList.remove("map-info--current");
        block.classList.add("map-info--current");
      } else {
        block.classList.remove("map-info--current");
      }
    })
  }

  districts.forEach((district) => {
    district.addEventListener("click", () => {
      const currentDistrict = document.querySelector(".map__district--current");
      const currentFilter = district.dataset.filter;

      districts.forEach(i => i.classList.remove("map__district--chosen"));
      district.classList.toggle("map__district--chosen")
      currentDistrict.textContent = district.textContent;

      filter(currentFilter, addressBlocks)
    })
  })
}

schoolLocation()




