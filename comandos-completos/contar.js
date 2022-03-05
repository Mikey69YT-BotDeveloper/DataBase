case 'contar':
	con = ["+","×","÷","-"]
	ty = con[Math.floor(Math.random() * con.length)]
	number1 = `${Math.floor(Math.random() * 100)}`
	number2 = `${Math.floor(Math.random() * 100)}`
	conta = `Cuanto és ${number1} ${ty} ${number2}?`
	client.reply(conta)
	break