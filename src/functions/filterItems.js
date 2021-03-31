export const filterItems = (products, gemstoneCompositions,colors, categories, price, materials, starNumbers) => {
    
    let tempProducts = [...products]
 
    if(price[0] > 0 || price[1] > 0){
      tempProducts = tempProducts.filter(product => product.price >= price[0] && product.price <= price[1])
    }
 
    if(colors.length > 0){
      tempProducts = tempProducts.filter(x => colors.includes(x.color))
    }
 
    if(categories.length > 0){
      tempProducts = tempProducts.filter(x => categories.includes(x.category._id))
    }
 
    if(materials.length > 0){
        tempProducts = tempProducts.filter(x => materials.includes(x.material))
      }

      if(gemstoneCompositions.length > 0){
        tempProducts = tempProducts.filter(x => gemstoneCompositions.includes(x.gemstoneComposition))
      }
 
    if(starNumbers.length > 0){
      tempProducts = tempProducts.filter(x => {
        for(let num of starNumbers){
          if(x.averageRating >= num && x.averageRating < num + 1 ){
            return x
          }
        }
      })
    }
 
    return tempProducts.sort((a, b) => {
      if(a.price > b.price){
        return -1
      }else if(a.price < b.price){
        return  1
      }else{
        return 0
      }
    } );
 
  }