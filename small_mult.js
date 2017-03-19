function smallestCommons(arr) {
	var num1, num2, lcm;

	if (arr[0] > arr[1]) {
		var temp = arr[0];
		arr[0] = arr[1];
		arr[1] = temp;
	}

	if (arr[0] == 1) {
		num1 = 2;
		for (i = arr[0]+1; i <= arr[1]; i++) {
			num2 = i+1;
			lcm = num2;

			while (true) {
				if (lcm % num1 === 0) {
					num1 = lcm;
					break;
				} else {
					lcm += num2;
				}
			}
		}
	} else {
		num1 = arr[0];
		for (i = arr[0]+1; i <= arr[1]; i++) {
			num2 = i;
			lcm = num2;

			while (true) {
				if (lcm % num1 === 0) {
					num1 = lcm;
					break;
				} else {
					lcm += num2;
				}
			}
		}

	}


	return lcm;

}

console.log(smallestCommons([1,12]));