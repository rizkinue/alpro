
////////////////////////////////////////////////////
// PROGRAM SUPPLIER PENJUALAN TAHU MENTAH
///////////////////////////////////////////////////


let pendapatan, total, rata, komisi

const list_jual = [[] , [], [], []]
let	urutan		= 0 

function input(){

	let harga, ttl_berat

	const nama	 		= document.getElementById('nm').value
	const tanggal		= document.forms[0]["date"].value
	const jenis			= document.forms[0]["form"].value
	const jumlah	 	= document.forms[0]["jumlah"].value

	list_jual[0][urutan] = tanggal
	list_jual[1] 		 = jenis
	list_jual[2][urutan] = jumlah 
	urutan++

	if(list_jual[1] == "Tahu Sumedang")
		harga = 200
	if(list_jual[1] == "Tahu Sutra")
		harga = 300
	if(list_jual[1] == "Tahu Kuning")
		harga = 250
	if(list_jual[1] == "Tahu Bandung")
		harga == 500

	pendapatan = harga * jumlah

	komisi = pendapatan * 0.05

	total = pendapatan - komisi	

	if(!nama, !tanggal, !jumlah){
		perNama.innerHTML = "Wajib Memasukkan Nama" 
		perTgl.innerHTML = "Wajib Mengisi Tanggal "
		perBerat.innerHTML = "Wajib Mengisi Berat Tahu"
	} /* else if(!tanggal){
		perTgl.innerHTML = "Wajib Mengisi Tanggal "

	} else if(!jumlah){
		perBerat.innerHTML = "Wajib Mengisi Berat Tahu"
	} */ else{ 	
		document.getElementById('hasil').innerHTML += `
			<b>Nama Penjual</b> : ${nama}
			<br> <b>Tanggal Penjualan</b> : ${tanggal}
			<br> <b>Hasil Penjualan ${jenis}</b> : Rp. ${pendapatan}
			<br> <b>Komisi Pabrik</b> : Rp. ${komisi}
			<br> <b>Total Pendapatan Penjual</b> : (Rp. ${pendapatan} - Rp. ${komisi}) = Rp. ${total}<hr>`

			document.forms[0]["date"].value = ""
			document.forms[0]["form"].value = ""
    		document.forms[0]["jumlah"].value = ""
	}

}

