ServerEvents.recipes(event => {
    event.remove({ output: 'antiqueatlas:empty_antique_atlas' })
    event.shapeless('antiqueatlas:empty_antique_atlas', [
        'minecraft:leather',
        'minecraft:paper'
    ])
		event.shapeless('antiqueatlas:empty_antique_atlas', [
        'minecraft:leather',
        '#tfc:sewing_light_cloth'
    ])
})