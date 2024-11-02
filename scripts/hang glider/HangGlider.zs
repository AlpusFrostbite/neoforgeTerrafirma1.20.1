
craftingTable.remove(<item:hangglider:glider_framework>);
craftingTable.remove(<item:hangglider:reinforced_hang_glider>);


craftingTable.addShapeless("reinforced_hang_glider", <item:hangglider:reinforced_hang_glider>, [<item:tfc:wool_cloth>, <item:tfc:burlap_cloth>, <item:hangglider:hang_glider>]);
craftingTable.addShaped("glider_framework", <item:hangglider:glider_framework>, [
    [<item:minecraft:air>, <item:tfc:metal/rod/wrought_iron>, <item:minecraft:air>],
    [<item:tfc:metal/rod/wrought_iron>, <item:minecraft:air>, <item:tfc:metal/rod/wrought_iron>],
    [<item:tfc:metal/rod/wrought_iron>, <item:tfc:metal/rod/wrought_iron>, <item:tfc:metal/rod/wrought_iron>]]);
