async function getCountryName() {
    code = document.getElementById('country_code').value.toUpperCase()
    document.getElementById('country_name').value = ''

    if (code == "") {
        document.getElementById('country_name').value = 'Please enter something'
        return
    }
    var page = 1,
        j = 0;
    var data;
    try {
        while (page <= 25) {
            var response = await fetch('https://jsonmock.hackerrank.com/api/countries?page=' + page);
            data = await response.json();
            while (j < 10) {
                // console.log(data.data[j].alpha2Code)
                if (data.data[j].alpha2Code == code) {
                    console.log('Page no : ' + page + '\n')
                    console.log('Country Code: ' + code)
                    console.log('Country : ' + data.data[j].name)

                    document.getElementById('country_name').value = data.data[j].name.toUpperCase()

                    return
                }
                ++j

            }
            page++
            j = 0
            if (page == 25) {
                document.getElementById('country_name').value = 'Country not found'
            }
        }
    } catch (error) {
        console.log(error.message)
    }
}