
		document.addEventListener("DOMContentLoaded", function () {
			const VehiclesMenuItem = document.getElementById('Vehicles-menu-item');
			const backdrop = document.querySelector('.backdrop');
			const VehiclesDropdown = document.getElementById('Vehicles-dropdown');

			VehiclesMenuItem.addEventListener('mouseover', function () {
				backdrop.style.display = 'block';
			});

			VehiclesMenuItem.addEventListener('mouseout', function (event) {
				// Check if the mouse is outside of the Vehicles menu item and dropdown
				if (!VehiclesMenuItem.contains(event.relatedTarget) && !VehiclesDropdown.contains(event.relatedTarget)) {
					backdrop.style.display = 'none';
				}
			});

			VehiclesDropdown.addEventListener('mouseover', function () {
				backdrop.style.display = 'block';
			});

			VehiclesDropdown.addEventListener('mouseout', function (event) {
				// Check if the mouse is outside of the Vehicles menu item and dropdown
				if (!VehiclesMenuItem.contains(event.relatedTarget) && !VehiclesDropdown.contains(event.relatedTarget)) {
					backdrop.style.display = 'none';
				}
			});
		});

        //energy
		document.addEventListener("DOMContentLoaded", function () {
			const EnergyMenuItem = document.getElementById('Energy-menu-item');
			const backdrop = document.querySelector('.backdrop');
			const EnergyDropdown = document.getElementById('Energy-dropdown');

			EnergyMenuItem.addEventListener('mouseover', function () {
				backdrop.style.display = 'block';
			});

			EnergyMenuItem.addEventListener('mouseout', function (event) {
				// Check if the mouse is outside of the Energy menu item and dropdown
				if (!EnergyMenuItem.contains(event.relatedTarget) && !EnergyDropdown.contains(event.relatedTarget)) {
					backdrop.style.display = 'none';
				}
			});

			EnergyDropdown.addEventListener('mouseover', function () {
				backdrop.style.display = 'block';
			});

			EnergyDropdown.addEventListener('mouseout', function (event) {
				// Check if the mouse is outside of the Energy menu item and dropdown
				if (!EnergyMenuItem.contains(event.relatedTarget) && !EnergyDropdown.contains(event.relatedTarget)) {
					backdrop.style.display = 'none';
				}
			});
		});

		//charging
		document.addEventListener("DOMContentLoaded", function () {
			const ChargingMenuItem = document.getElementById('Charging-menu-item');
			const backdrop = document.querySelector('.backdrop');
			const ChargingDropdown = document.getElementById('Charging-dropdown');

			ChargingMenuItem.addEventListener('mouseover', function () {
				backdrop.style.display = 'block';
			});

			ChargingMenuItem.addEventListener('mouseout', function (event) {
				// Check if the mouse is outside of the Charging menu item and dropdown
				if (!ChargingMenuItem.contains(event.relatedTarget) && !ChargingDropdown.contains(event.relatedTarget)) {
					backdrop.style.display = 'none';
				}
			});

			ChargingDropdown.addEventListener('mouseover', function () {
				backdrop.style.display = 'block';
			});

			ChargingDropdown.addEventListener('mouseout', function (event) {
				// Check if the mouse is outside of the Charging menu item and dropdown
				if (!ChargingMenuItem.contains(event.relatedTarget) && !ChargingDropdown.contains(event.relatedTarget)) {
					backdrop.style.display = 'none';
				}
			});
		});

		//shop
		document.addEventListener("DOMContentLoaded", function () {
			const ShopMenuItem = document.getElementById('Shop-menu-item');
			const backdrop = document.querySelector('.backdrop');
			const ShopDropdown = document.getElementById('Shop-dropdown');

			ShopMenuItem.addEventListener('mouseover', function () {
				backdrop.style.display = 'block';
			});

			ShopMenuItem.addEventListener('mouseout', function (event) {
				// Check if the mouse is outside of the Shop menu item and dropdown
				if (!ShopMenuItem.contains(event.relatedTarget) && !ShopDropdown.contains(event.relatedTarget)) {
					backdrop.style.display = 'none';
				}
			});

			ShopDropdown.addEventListener('mouseover', function () {
				backdrop.style.display = 'block';
			});

			ShopDropdown.addEventListener('mouseout', function (event) {
				// Check if the mouse is outside of the Shop menu item and dropdown
				if (!ShopMenuItem.contains(event.relatedTarget) && !ShopDropdown.contains(event.relatedTarget)) {
					backdrop.style.display = 'none';
				}
			});
		});

		//Discover
		document.addEventListener("DOMContentLoaded", function () {
			const DiscoverMenuItem = document.getElementById('Discover-menu-item');
			const backdrop = document.querySelector('.backdrop');
			const DiscoverDropdown = document.getElementById('Discover-dropdown');

			DiscoverMenuItem.addEventListener('mouseover', function () {
				backdrop.style.display = 'block';
			});

			DiscoverMenuItem.addEventListener('mouseout', function (event) {
				// Check if the mouse is outside of the Discover menu item and dropdown
				if (!DiscoverMenuItem.contains(event.relatedTarget) && !DiscoverDropdown.contains(event.relatedTarget)) {
					backdrop.style.display = 'none';
				}
			});

			DiscoverDropdown.addEventListener('mouseover', function () {
				backdrop.style.display = 'block';
			});

			DiscoverDropdown.addEventListener('mouseout', function (event) {
				// Check if the mouse is outside of the Discover menu item and dropdown
				if (!DiscoverMenuItem.contains(event.relatedTarget) && !DiscoverDropdown.contains(event.relatedTarget)) {
					backdrop.style.display = 'none';
				}
			});
		});