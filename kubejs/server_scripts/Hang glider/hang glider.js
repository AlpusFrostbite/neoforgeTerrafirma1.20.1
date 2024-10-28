ServerEvents.recipes(event => {
	
    event.remove({ output: 'hangglider:glider_framework' })
	
	event.remove({ output: 'hangglider:reinforced_hang_glider' })
	
    event.shaped('hangglider:glider_framework', [
	'AAA',
	'A A',
	' A '
    ], {
		A:'tfc:metal/rod/wrought_iron'
	}
	)
	event.shaped('hangglider:reinforced_hang_glider', [
	' A ',
	'ABA',
	'   '
    ], {
		A:'tfc:metal/rod/steel',
		B:'hangglider:hang_glider'
		
	}
	)
})