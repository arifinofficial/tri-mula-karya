import { homeHeroImg } from "@/assets";
import { StaticImageData } from "next/image";

export interface PressDataType {
    slug: string
    title: string
    date: string
    location: string
    pressHero: StaticImageData
    pressThumbnail: StaticImageData
    category: string
    pressContent: string
}

const pressData: PressDataType[] = [
    // {
    //     slug: "article-1",
    //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     date: "01/05/2026",
    //     location: "Denpasar, Bali",
    //     pressHero: homeHeroImg,
    //     pressThumbnail: homeHeroImg,
    //     category : "Construction",
    //     pressContent: `<h2 class="press-subHeading text-3xl lg:text-5xl font-semibold mb-8 lg:mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    //                     <p class="press-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin, neque nec blandit porta, risus leo molestie justo, vel cursus enim ante ut massa. Praesent eleifend ac ligula ac porttitor. Integer sem lacus, hendrerit quis luctus non, consectetur consectetur nisi. Nam maximus vestibulum enim, eget tincidunt nulla gravida ac. Cras posuere elit non cursus mattis. Mauris enim ante, vulputate id auctor et, ultrices sit amet mauris. Proin vitae dui at sapien sodales venenatis congue sagittis tortor.
    //                     <br><br>
    //                     Nunc viverra aliquet ex at rutrum. Ut mollis lectus at ornare aliquam. Vivamus mollis bibendum mi, sed tempor dolor semper sagittis. Sed scelerisque nunc sapien, sit amet rhoncus nisl eleifend blandit. Nulla facilisi. Fusce faucibus nisl eget sagittis lacinia. Proin venenatis lacinia elit at consequat. Phasellus lacinia nunc laoreet, tempor mauris vitae, dictum mauris.
    //                     <br><br>
    //                     Phasellus non pellentesque quam. Nullam posuere auctor luctus. Morbi varius felis nulla, rutrum auctor ex malesuada et. Quisque convallis id libero a gravida. Morbi vel mollis ante, nec dictum tortor. Vivamus id ex ut elit tempor viverra tincidunt sed ligula. Mauris arcu magna, dapibus eget mollis sit amet, imperdiet vitae urna. Aliquam ornare aliquam mi non aliquam. Morbi tristique ultricies urna, a aliquet leo scelerisque et. In dictum ex quis pulvinar venenatis. In massa est, imperdiet nec tincidunt a, rutrum nec dolor.
                        
    //                     <br><br>
    //                     Vivamus malesuada vitae lacus ac hendrerit. Proin ac finibus nisi. Aenean laoreet fringilla erat in sodales. Praesent felis tellus, hendrerit sed augue id, porta sagittis nulla. Cras cursus ante ac facilisis aliquet. Nunc ac interdum diam. Curabitur porttitor id enim nec viverra. Sed justo dui, faucibus at enim sit amet, tempor placerat enim. Cras in purus quis enim consectetur consectetur.
    //                     <br><br>
    //                     Praesent vitae tempus tellus. Etiam tempor nibh lobortis, pharetra enim in, pretium justo. Aliquam dignissim neque metus, id pellentesque nisi auctor at. Quisque a turpis ut odio commodo fringilla. Integer nec justo id mi porta faucibus. Curabitur scelerisque vel odio id condimentum. Nullam sed lobortis diam, vitae ullamcorper justo.</p>
    //                     <br><br>
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin, neque nec blandit porta, risus leo molestie justo, vel cursus enim ante ut massa. Praesent eleifend ac ligula ac porttitor. Integer sem lacus, hendrerit quis luctus non, consectetur consectetur nisi. Nam maximus vestibulum enim, eget tincidunt nulla gravida ac. Cras posuere elit non cursus mattis. Mauris enim ante, vulputate id auctor et, ultrices sit amet mauris. Proin vitae dui at sapien sodales venenatis congue sagittis tortor.
    //                     <br><br>
    //                     Nunc viverra aliquet ex at rutrum. Ut mollis lectus at ornare aliquam. Vivamus mollis bibendum mi, sed tempor dolor semper sagittis. Sed scelerisque nunc sapien, sit amet rhoncus nisl eleifend blandit. Nulla facilisi. Fusce faucibus nisl eget sagittis lacinia. Proin venenatis lacinia elit at consequat. Phasellus lacinia nunc laoreet, tempor mauris vitae, dictum mauris.
    //                     <br><br>
    //                     Phasellus non pellentesque quam. Nullam posuere auctor luctus. Morbi varius felis nulla, rutrum auctor ex malesuada et. Quisque convallis id libero a gravida. Morbi vel mollis ante, nec dictum tortor. Vivamus id ex ut elit tempor viverra tincidunt sed ligula. Mauris arcu magna, dapibus eget mollis sit amet, imperdiet vitae urna. Aliquam ornare aliquam mi non aliquam. Morbi tristique ultricies urna, a aliquet leo scelerisque et. In dictum ex quis pulvinar venenatis. In massa est, imperdiet nec tincidunt a, rutrum nec dolor.
                        
    //                     <br><br>
    //                     Vivamus malesuada vitae lacus ac hendrerit. Proin ac finibus nisi. Aenean laoreet fringilla erat in sodales. Praesent felis tellus, hendrerit sed augue id, porta sagittis nulla. Cras cursus ante ac facilisis aliquet. Nunc ac interdum diam. Curabitur porttitor id enim nec viverra. Sed justo dui, faucibus at enim sit amet, tempor placerat enim. Cras in purus quis enim consectetur consectetur.
    //                     <br><br>
    //                     Praesent vitae tempus tellus. Etiam tempor nibh lobortis, pharetra enim in, pretium justo. Aliquam dignissim neque metus, id pellentesque nisi auctor at. Quisque a turpis ut odio commodo fringilla. Integer nec justo id mi porta faucibus. Curabitur scelerisque vel odio id condimentum. Nullam sed lobortis diam, vitae ullamcorper justo.</p>`
    // },
    // {
    //     slug: "article-2",
    //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     date: "01/05/2026",
    //     location: "Denpasar, Bali",
    //     pressHero: homeHeroImg,
    //     pressThumbnail: homeHeroImg,
    //     category : "Construction",
    //    pressContent: `<h2 class="press-subHeading text-3xl lg:text-5xl font-semibold mb-8 lg:mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    //                     <p class="press-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin, neque nec blandit porta, risus leo molestie justo, vel cursus enim ante ut massa. Praesent eleifend ac ligula ac porttitor. Integer sem lacus, hendrerit quis luctus non, consectetur consectetur nisi. Nam maximus vestibulum enim, eget tincidunt nulla gravida ac. Cras posuere elit non cursus mattis. Mauris enim ante, vulputate id auctor et, ultrices sit amet mauris. Proin vitae dui at sapien sodales venenatis congue sagittis tortor.
    //                     <br><br>
    //                     Nunc viverra aliquet ex at rutrum. Ut mollis lectus at ornare aliquam. Vivamus mollis bibendum mi, sed tempor dolor semper sagittis. Sed scelerisque nunc sapien, sit amet rhoncus nisl eleifend blandit. Nulla facilisi. Fusce faucibus nisl eget sagittis lacinia. Proin venenatis lacinia elit at consequat. Phasellus lacinia nunc laoreet, tempor mauris vitae, dictum mauris.
    //                     <br><br>
    //                     Phasellus non pellentesque quam. Nullam posuere auctor luctus. Morbi varius felis nulla, rutrum auctor ex malesuada et. Quisque convallis id libero a gravida. Morbi vel mollis ante, nec dictum tortor. Vivamus id ex ut elit tempor viverra tincidunt sed ligula. Mauris arcu magna, dapibus eget mollis sit amet, imperdiet vitae urna. Aliquam ornare aliquam mi non aliquam. Morbi tristique ultricies urna, a aliquet leo scelerisque et. In dictum ex quis pulvinar venenatis. In massa est, imperdiet nec tincidunt a, rutrum nec dolor.
                        
    //                     <br><br>
    //                     Vivamus malesuada vitae lacus ac hendrerit. Proin ac finibus nisi. Aenean laoreet fringilla erat in sodales. Praesent felis tellus, hendrerit sed augue id, porta sagittis nulla. Cras cursus ante ac facilisis aliquet. Nunc ac interdum diam. Curabitur porttitor id enim nec viverra. Sed justo dui, faucibus at enim sit amet, tempor placerat enim. Cras in purus quis enim consectetur consectetur.
    //                     <br><br>
    //                     Praesent vitae tempus tellus. Etiam tempor nibh lobortis, pharetra enim in, pretium justo. Aliquam dignissim neque metus, id pellentesque nisi auctor at. Quisque a turpis ut odio commodo fringilla. Integer nec justo id mi porta faucibus. Curabitur scelerisque vel odio id condimentum. Nullam sed lobortis diam, vitae ullamcorper justo.</p>
    //                     <br><br>
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin, neque nec blandit porta, risus leo molestie justo, vel cursus enim ante ut massa. Praesent eleifend ac ligula ac porttitor. Integer sem lacus, hendrerit quis luctus non, consectetur consectetur nisi. Nam maximus vestibulum enim, eget tincidunt nulla gravida ac. Cras posuere elit non cursus mattis. Mauris enim ante, vulputate id auctor et, ultrices sit amet mauris. Proin vitae dui at sapien sodales venenatis congue sagittis tortor.
    //                     <br><br>
    //                     Nunc viverra aliquet ex at rutrum. Ut mollis lectus at ornare aliquam. Vivamus mollis bibendum mi, sed tempor dolor semper sagittis. Sed scelerisque nunc sapien, sit amet rhoncus nisl eleifend blandit. Nulla facilisi. Fusce faucibus nisl eget sagittis lacinia. Proin venenatis lacinia elit at consequat. Phasellus lacinia nunc laoreet, tempor mauris vitae, dictum mauris.
    //                     <br><br>
    //                     Phasellus non pellentesque quam. Nullam posuere auctor luctus. Morbi varius felis nulla, rutrum auctor ex malesuada et. Quisque convallis id libero a gravida. Morbi vel mollis ante, nec dictum tortor. Vivamus id ex ut elit tempor viverra tincidunt sed ligula. Mauris arcu magna, dapibus eget mollis sit amet, imperdiet vitae urna. Aliquam ornare aliquam mi non aliquam. Morbi tristique ultricies urna, a aliquet leo scelerisque et. In dictum ex quis pulvinar venenatis. In massa est, imperdiet nec tincidunt a, rutrum nec dolor.
                        
    //                     <br><br>
    //                     Vivamus malesuada vitae lacus ac hendrerit. Proin ac finibus nisi. Aenean laoreet fringilla erat in sodales. Praesent felis tellus, hendrerit sed augue id, porta sagittis nulla. Cras cursus ante ac facilisis aliquet. Nunc ac interdum diam. Curabitur porttitor id enim nec viverra. Sed justo dui, faucibus at enim sit amet, tempor placerat enim. Cras in purus quis enim consectetur consectetur.
    //                     <br><br>
    //                     Praesent vitae tempus tellus. Etiam tempor nibh lobortis, pharetra enim in, pretium justo. Aliquam dignissim neque metus, id pellentesque nisi auctor at. Quisque a turpis ut odio commodo fringilla. Integer nec justo id mi porta faucibus. Curabitur scelerisque vel odio id condimentum. Nullam sed lobortis diam, vitae ullamcorper justo.</p>`
    // },
    // {
    //     slug: "article-3",
    //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     date: "01/05/2026",
    //     location: "Denpasar, Bali",
    //     pressHero: homeHeroImg,
    //     pressThumbnail: homeHeroImg,
    //     category : "Construction",
    //     pressContent: `<h2 class="press-subHeading text-3xl lg:text-5xl font-semibold mb-8 lg:mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    //                     <p class="press-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin, neque nec blandit porta, risus leo molestie justo, vel cursus enim ante ut massa. Praesent eleifend ac ligula ac porttitor. Integer sem lacus, hendrerit quis luctus non, consectetur consectetur nisi. Nam maximus vestibulum enim, eget tincidunt nulla gravida ac. Cras posuere elit non cursus mattis. Mauris enim ante, vulputate id auctor et, ultrices sit amet mauris. Proin vitae dui at sapien sodales venenatis congue sagittis tortor.
    //                     <br><br>
    //                     Nunc viverra aliquet ex at rutrum. Ut mollis lectus at ornare aliquam. Vivamus mollis bibendum mi, sed tempor dolor semper sagittis. Sed scelerisque nunc sapien, sit amet rhoncus nisl eleifend blandit. Nulla facilisi. Fusce faucibus nisl eget sagittis lacinia. Proin venenatis lacinia elit at consequat. Phasellus lacinia nunc laoreet, tempor mauris vitae, dictum mauris.
    //                     <br><br>
    //                     Phasellus non pellentesque quam. Nullam posuere auctor luctus. Morbi varius felis nulla, rutrum auctor ex malesuada et. Quisque convallis id libero a gravida. Morbi vel mollis ante, nec dictum tortor. Vivamus id ex ut elit tempor viverra tincidunt sed ligula. Mauris arcu magna, dapibus eget mollis sit amet, imperdiet vitae urna. Aliquam ornare aliquam mi non aliquam. Morbi tristique ultricies urna, a aliquet leo scelerisque et. In dictum ex quis pulvinar venenatis. In massa est, imperdiet nec tincidunt a, rutrum nec dolor.
                        
    //                     <br><br>
    //                     Vivamus malesuada vitae lacus ac hendrerit. Proin ac finibus nisi. Aenean laoreet fringilla erat in sodales. Praesent felis tellus, hendrerit sed augue id, porta sagittis nulla. Cras cursus ante ac facilisis aliquet. Nunc ac interdum diam. Curabitur porttitor id enim nec viverra. Sed justo dui, faucibus at enim sit amet, tempor placerat enim. Cras in purus quis enim consectetur consectetur.
    //                     <br><br>
    //                     Praesent vitae tempus tellus. Etiam tempor nibh lobortis, pharetra enim in, pretium justo. Aliquam dignissim neque metus, id pellentesque nisi auctor at. Quisque a turpis ut odio commodo fringilla. Integer nec justo id mi porta faucibus. Curabitur scelerisque vel odio id condimentum. Nullam sed lobortis diam, vitae ullamcorper justo.</p>
    //                     <br><br>
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin, neque nec blandit porta, risus leo molestie justo, vel cursus enim ante ut massa. Praesent eleifend ac ligula ac porttitor. Integer sem lacus, hendrerit quis luctus non, consectetur consectetur nisi. Nam maximus vestibulum enim, eget tincidunt nulla gravida ac. Cras posuere elit non cursus mattis. Mauris enim ante, vulputate id auctor et, ultrices sit amet mauris. Proin vitae dui at sapien sodales venenatis congue sagittis tortor.
    //                     <br><br>
    //                     Nunc viverra aliquet ex at rutrum. Ut mollis lectus at ornare aliquam. Vivamus mollis bibendum mi, sed tempor dolor semper sagittis. Sed scelerisque nunc sapien, sit amet rhoncus nisl eleifend blandit. Nulla facilisi. Fusce faucibus nisl eget sagittis lacinia. Proin venenatis lacinia elit at consequat. Phasellus lacinia nunc laoreet, tempor mauris vitae, dictum mauris.
    //                     <br><br>
    //                     Phasellus non pellentesque quam. Nullam posuere auctor luctus. Morbi varius felis nulla, rutrum auctor ex malesuada et. Quisque convallis id libero a gravida. Morbi vel mollis ante, nec dictum tortor. Vivamus id ex ut elit tempor viverra tincidunt sed ligula. Mauris arcu magna, dapibus eget mollis sit amet, imperdiet vitae urna. Aliquam ornare aliquam mi non aliquam. Morbi tristique ultricies urna, a aliquet leo scelerisque et. In dictum ex quis pulvinar venenatis. In massa est, imperdiet nec tincidunt a, rutrum nec dolor.
                        
    //                     <br><br>
    //                     Vivamus malesuada vitae lacus ac hendrerit. Proin ac finibus nisi. Aenean laoreet fringilla erat in sodales. Praesent felis tellus, hendrerit sed augue id, porta sagittis nulla. Cras cursus ante ac facilisis aliquet. Nunc ac interdum diam. Curabitur porttitor id enim nec viverra. Sed justo dui, faucibus at enim sit amet, tempor placerat enim. Cras in purus quis enim consectetur consectetur.
    //                     <br><br>
    //                     Praesent vitae tempus tellus. Etiam tempor nibh lobortis, pharetra enim in, pretium justo. Aliquam dignissim neque metus, id pellentesque nisi auctor at. Quisque a turpis ut odio commodo fringilla. Integer nec justo id mi porta faucibus. Curabitur scelerisque vel odio id condimentum. Nullam sed lobortis diam, vitae ullamcorper justo.</p>`
    // },
    // {
    //     slug: "article-4",
    //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     date: "01/05/2026",
    //     location: "Denpasar, Bali",
    //     pressHero: homeHeroImg,
    //     pressThumbnail: homeHeroImg,
    //     category : "Construction",
    //     pressContent: `<h2 class="press-subHeading text-3xl lg:text-5xl font-semibold mb-8 lg:mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    //                     <p class="press-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin, neque nec blandit porta, risus leo molestie justo, vel cursus enim ante ut massa. Praesent eleifend ac ligula ac porttitor. Integer sem lacus, hendrerit quis luctus non, consectetur consectetur nisi. Nam maximus vestibulum enim, eget tincidunt nulla gravida ac. Cras posuere elit non cursus mattis. Mauris enim ante, vulputate id auctor et, ultrices sit amet mauris. Proin vitae dui at sapien sodales venenatis congue sagittis tortor.
    //                     <br><br>
    //                     Nunc viverra aliquet ex at rutrum. Ut mollis lectus at ornare aliquam. Vivamus mollis bibendum mi, sed tempor dolor semper sagittis. Sed scelerisque nunc sapien, sit amet rhoncus nisl eleifend blandit. Nulla facilisi. Fusce faucibus nisl eget sagittis lacinia. Proin venenatis lacinia elit at consequat. Phasellus lacinia nunc laoreet, tempor mauris vitae, dictum mauris.
    //                     <br><br>
    //                     Phasellus non pellentesque quam. Nullam posuere auctor luctus. Morbi varius felis nulla, rutrum auctor ex malesuada et. Quisque convallis id libero a gravida. Morbi vel mollis ante, nec dictum tortor. Vivamus id ex ut elit tempor viverra tincidunt sed ligula. Mauris arcu magna, dapibus eget mollis sit amet, imperdiet vitae urna. Aliquam ornare aliquam mi non aliquam. Morbi tristique ultricies urna, a aliquet leo scelerisque et. In dictum ex quis pulvinar venenatis. In massa est, imperdiet nec tincidunt a, rutrum nec dolor.
                        
    //                     <br><br>
    //                     Vivamus malesuada vitae lacus ac hendrerit. Proin ac finibus nisi. Aenean laoreet fringilla erat in sodales. Praesent felis tellus, hendrerit sed augue id, porta sagittis nulla. Cras cursus ante ac facilisis aliquet. Nunc ac interdum diam. Curabitur porttitor id enim nec viverra. Sed justo dui, faucibus at enim sit amet, tempor placerat enim. Cras in purus quis enim consectetur consectetur.
    //                     <br><br>
    //                     Praesent vitae tempus tellus. Etiam tempor nibh lobortis, pharetra enim in, pretium justo. Aliquam dignissim neque metus, id pellentesque nisi auctor at. Quisque a turpis ut odio commodo fringilla. Integer nec justo id mi porta faucibus. Curabitur scelerisque vel odio id condimentum. Nullam sed lobortis diam, vitae ullamcorper justo.</p>
    //                     <br><br>
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin, neque nec blandit porta, risus leo molestie justo, vel cursus enim ante ut massa. Praesent eleifend ac ligula ac porttitor. Integer sem lacus, hendrerit quis luctus non, consectetur consectetur nisi. Nam maximus vestibulum enim, eget tincidunt nulla gravida ac. Cras posuere elit non cursus mattis. Mauris enim ante, vulputate id auctor et, ultrices sit amet mauris. Proin vitae dui at sapien sodales venenatis congue sagittis tortor.
    //                     <br><br>
    //                     Nunc viverra aliquet ex at rutrum. Ut mollis lectus at ornare aliquam. Vivamus mollis bibendum mi, sed tempor dolor semper sagittis. Sed scelerisque nunc sapien, sit amet rhoncus nisl eleifend blandit. Nulla facilisi. Fusce faucibus nisl eget sagittis lacinia. Proin venenatis lacinia elit at consequat. Phasellus lacinia nunc laoreet, tempor mauris vitae, dictum mauris.
    //                     <br><br>
    //                     Phasellus non pellentesque quam. Nullam posuere auctor luctus. Morbi varius felis nulla, rutrum auctor ex malesuada et. Quisque convallis id libero a gravida. Morbi vel mollis ante, nec dictum tortor. Vivamus id ex ut elit tempor viverra tincidunt sed ligula. Mauris arcu magna, dapibus eget mollis sit amet, imperdiet vitae urna. Aliquam ornare aliquam mi non aliquam. Morbi tristique ultricies urna, a aliquet leo scelerisque et. In dictum ex quis pulvinar venenatis. In massa est, imperdiet nec tincidunt a, rutrum nec dolor.
                        
    //                     <br><br>
    //                     Vivamus malesuada vitae lacus ac hendrerit. Proin ac finibus nisi. Aenean laoreet fringilla erat in sodales. Praesent felis tellus, hendrerit sed augue id, porta sagittis nulla. Cras cursus ante ac facilisis aliquet. Nunc ac interdum diam. Curabitur porttitor id enim nec viverra. Sed justo dui, faucibus at enim sit amet, tempor placerat enim. Cras in purus quis enim consectetur consectetur.
    //                     <br><br>
    //                     Praesent vitae tempus tellus. Etiam tempor nibh lobortis, pharetra enim in, pretium justo. Aliquam dignissim neque metus, id pellentesque nisi auctor at. Quisque a turpis ut odio commodo fringilla. Integer nec justo id mi porta faucibus. Curabitur scelerisque vel odio id condimentum. Nullam sed lobortis diam, vitae ullamcorper justo.</p>`
    // },
    // {
    //     slug: "article-5",
    //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     date: "01/05/2026",
    //     location: "Denpasar, Bali",
    //     pressHero: homeHeroImg,
    //     pressThumbnail: homeHeroImg,
    //     category : "Construction",
    //     pressContent: `<h2 class="press-subHeading text-3xl lg:text-5xl font-semibold mb-8 lg:mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    //                     <p class="press-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin, neque nec blandit porta, risus leo molestie justo, vel cursus enim ante ut massa. Praesent eleifend ac ligula ac porttitor. Integer sem lacus, hendrerit quis luctus non, consectetur consectetur nisi. Nam maximus vestibulum enim, eget tincidunt nulla gravida ac. Cras posuere elit non cursus mattis. Mauris enim ante, vulputate id auctor et, ultrices sit amet mauris. Proin vitae dui at sapien sodales venenatis congue sagittis tortor.
    //                     <br><br>
    //                     Nunc viverra aliquet ex at rutrum. Ut mollis lectus at ornare aliquam. Vivamus mollis bibendum mi, sed tempor dolor semper sagittis. Sed scelerisque nunc sapien, sit amet rhoncus nisl eleifend blandit. Nulla facilisi. Fusce faucibus nisl eget sagittis lacinia. Proin venenatis lacinia elit at consequat. Phasellus lacinia nunc laoreet, tempor mauris vitae, dictum mauris.
    //                     <br><br>
    //                     Phasellus non pellentesque quam. Nullam posuere auctor luctus. Morbi varius felis nulla, rutrum auctor ex malesuada et. Quisque convallis id libero a gravida. Morbi vel mollis ante, nec dictum tortor. Vivamus id ex ut elit tempor viverra tincidunt sed ligula. Mauris arcu magna, dapibus eget mollis sit amet, imperdiet vitae urna. Aliquam ornare aliquam mi non aliquam. Morbi tristique ultricies urna, a aliquet leo scelerisque et. In dictum ex quis pulvinar venenatis. In massa est, imperdiet nec tincidunt a, rutrum nec dolor.
                        
    //                     <br><br>
    //                     Vivamus malesuada vitae lacus ac hendrerit. Proin ac finibus nisi. Aenean laoreet fringilla erat in sodales. Praesent felis tellus, hendrerit sed augue id, porta sagittis nulla. Cras cursus ante ac facilisis aliquet. Nunc ac interdum diam. Curabitur porttitor id enim nec viverra. Sed justo dui, faucibus at enim sit amet, tempor placerat enim. Cras in purus quis enim consectetur consectetur.
    //                     <br><br>
    //                     Praesent vitae tempus tellus. Etiam tempor nibh lobortis, pharetra enim in, pretium justo. Aliquam dignissim neque metus, id pellentesque nisi auctor at. Quisque a turpis ut odio commodo fringilla. Integer nec justo id mi porta faucibus. Curabitur scelerisque vel odio id condimentum. Nullam sed lobortis diam, vitae ullamcorper justo.</p>
    //                     <br><br>
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin, neque nec blandit porta, risus leo molestie justo, vel cursus enim ante ut massa. Praesent eleifend ac ligula ac porttitor. Integer sem lacus, hendrerit quis luctus non, consectetur consectetur nisi. Nam maximus vestibulum enim, eget tincidunt nulla gravida ac. Cras posuere elit non cursus mattis. Mauris enim ante, vulputate id auctor et, ultrices sit amet mauris. Proin vitae dui at sapien sodales venenatis congue sagittis tortor.
    //                     <br><br>
    //                     Nunc viverra aliquet ex at rutrum. Ut mollis lectus at ornare aliquam. Vivamus mollis bibendum mi, sed tempor dolor semper sagittis. Sed scelerisque nunc sapien, sit amet rhoncus nisl eleifend blandit. Nulla facilisi. Fusce faucibus nisl eget sagittis lacinia. Proin venenatis lacinia elit at consequat. Phasellus lacinia nunc laoreet, tempor mauris vitae, dictum mauris.
    //                     <br><br>
    //                     Phasellus non pellentesque quam. Nullam posuere auctor luctus. Morbi varius felis nulla, rutrum auctor ex malesuada et. Quisque convallis id libero a gravida. Morbi vel mollis ante, nec dictum tortor. Vivamus id ex ut elit tempor viverra tincidunt sed ligula. Mauris arcu magna, dapibus eget mollis sit amet, imperdiet vitae urna. Aliquam ornare aliquam mi non aliquam. Morbi tristique ultricies urna, a aliquet leo scelerisque et. In dictum ex quis pulvinar venenatis. In massa est, imperdiet nec tincidunt a, rutrum nec dolor.
                        
    //                     <br><br>
    //                     Vivamus malesuada vitae lacus ac hendrerit. Proin ac finibus nisi. Aenean laoreet fringilla erat in sodales. Praesent felis tellus, hendrerit sed augue id, porta sagittis nulla. Cras cursus ante ac facilisis aliquet. Nunc ac interdum diam. Curabitur porttitor id enim nec viverra. Sed justo dui, faucibus at enim sit amet, tempor placerat enim. Cras in purus quis enim consectetur consectetur.
    //                     <br><br>
    //                     Praesent vitae tempus tellus. Etiam tempor nibh lobortis, pharetra enim in, pretium justo. Aliquam dignissim neque metus, id pellentesque nisi auctor at. Quisque a turpis ut odio commodo fringilla. Integer nec justo id mi porta faucibus. Curabitur scelerisque vel odio id condimentum. Nullam sed lobortis diam, vitae ullamcorper justo.</p>`
    // },
    // {
    //     slug: "article-6",
    //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     date: "01/05/2026",
    //     location: "Denpasar, Bali",
    //     pressHero: homeHeroImg,
    //     pressThumbnail: homeHeroImg,
    //     category : "Construction",
    //     pressContent: `<h2 class="press-subHeading text-3xl lg:text-5xl font-semibold mb-8 lg:mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    //                     <p class="press-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin, neque nec blandit porta, risus leo molestie justo, vel cursus enim ante ut massa. Praesent eleifend ac ligula ac porttitor. Integer sem lacus, hendrerit quis luctus non, consectetur consectetur nisi. Nam maximus vestibulum enim, eget tincidunt nulla gravida ac. Cras posuere elit non cursus mattis. Mauris enim ante, vulputate id auctor et, ultrices sit amet mauris. Proin vitae dui at sapien sodales venenatis congue sagittis tortor.
    //                     <br><br>
    //                     Nunc viverra aliquet ex at rutrum. Ut mollis lectus at ornare aliquam. Vivamus mollis bibendum mi, sed tempor dolor semper sagittis. Sed scelerisque nunc sapien, sit amet rhoncus nisl eleifend blandit. Nulla facilisi. Fusce faucibus nisl eget sagittis lacinia. Proin venenatis lacinia elit at consequat. Phasellus lacinia nunc laoreet, tempor mauris vitae, dictum mauris.
    //                     <br><br>
    //                     Phasellus non pellentesque quam. Nullam posuere auctor luctus. Morbi varius felis nulla, rutrum auctor ex malesuada et. Quisque convallis id libero a gravida. Morbi vel mollis ante, nec dictum tortor. Vivamus id ex ut elit tempor viverra tincidunt sed ligula. Mauris arcu magna, dapibus eget mollis sit amet, imperdiet vitae urna. Aliquam ornare aliquam mi non aliquam. Morbi tristique ultricies urna, a aliquet leo scelerisque et. In dictum ex quis pulvinar venenatis. In massa est, imperdiet nec tincidunt a, rutrum nec dolor.
                        
    //                     <br><br>
    //                     Vivamus malesuada vitae lacus ac hendrerit. Proin ac finibus nisi. Aenean laoreet fringilla erat in sodales. Praesent felis tellus, hendrerit sed augue id, porta sagittis nulla. Cras cursus ante ac facilisis aliquet. Nunc ac interdum diam. Curabitur porttitor id enim nec viverra. Sed justo dui, faucibus at enim sit amet, tempor placerat enim. Cras in purus quis enim consectetur consectetur.
    //                     <br><br>
    //                     Praesent vitae tempus tellus. Etiam tempor nibh lobortis, pharetra enim in, pretium justo. Aliquam dignissim neque metus, id pellentesque nisi auctor at. Quisque a turpis ut odio commodo fringilla. Integer nec justo id mi porta faucibus. Curabitur scelerisque vel odio id condimentum. Nullam sed lobortis diam, vitae ullamcorper justo.</p>
    //                     <br><br>
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin, neque nec blandit porta, risus leo molestie justo, vel cursus enim ante ut massa. Praesent eleifend ac ligula ac porttitor. Integer sem lacus, hendrerit quis luctus non, consectetur consectetur nisi. Nam maximus vestibulum enim, eget tincidunt nulla gravida ac. Cras posuere elit non cursus mattis. Mauris enim ante, vulputate id auctor et, ultrices sit amet mauris. Proin vitae dui at sapien sodales venenatis congue sagittis tortor.
    //                     <br><br>
    //                     Nunc viverra aliquet ex at rutrum. Ut mollis lectus at ornare aliquam. Vivamus mollis bibendum mi, sed tempor dolor semper sagittis. Sed scelerisque nunc sapien, sit amet rhoncus nisl eleifend blandit. Nulla facilisi. Fusce faucibus nisl eget sagittis lacinia. Proin venenatis lacinia elit at consequat. Phasellus lacinia nunc laoreet, tempor mauris vitae, dictum mauris.
    //                     <br><br>
    //                     Phasellus non pellentesque quam. Nullam posuere auctor luctus. Morbi varius felis nulla, rutrum auctor ex malesuada et. Quisque convallis id libero a gravida. Morbi vel mollis ante, nec dictum tortor. Vivamus id ex ut elit tempor viverra tincidunt sed ligula. Mauris arcu magna, dapibus eget mollis sit amet, imperdiet vitae urna. Aliquam ornare aliquam mi non aliquam. Morbi tristique ultricies urna, a aliquet leo scelerisque et. In dictum ex quis pulvinar venenatis. In massa est, imperdiet nec tincidunt a, rutrum nec dolor.
                        
    //                     <br><br>
    //                     Vivamus malesuada vitae lacus ac hendrerit. Proin ac finibus nisi. Aenean laoreet fringilla erat in sodales. Praesent felis tellus, hendrerit sed augue id, porta sagittis nulla. Cras cursus ante ac facilisis aliquet. Nunc ac interdum diam. Curabitur porttitor id enim nec viverra. Sed justo dui, faucibus at enim sit amet, tempor placerat enim. Cras in purus quis enim consectetur consectetur.
    //                     <br><br>
    //                     Praesent vitae tempus tellus. Etiam tempor nibh lobortis, pharetra enim in, pretium justo. Aliquam dignissim neque metus, id pellentesque nisi auctor at. Quisque a turpis ut odio commodo fringilla. Integer nec justo id mi porta faucibus. Curabitur scelerisque vel odio id condimentum. Nullam sed lobortis diam, vitae ullamcorper justo.</p>`
    // },
    // {
    //     slug: "article-7",
    //     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     date: "01/05/2026",
    //     location: "Denpasar, Bali",
    //     pressHero: homeHeroImg,
    //     pressThumbnail: homeHeroImg,
    //     category : "Lifestyle",
    //     pressContent: `<h2 class="press-subHeading text-3xl lg:text-5xl font-semibold mb-8 lg:mb-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    //                     <p class="press-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin, neque nec blandit porta, risus leo molestie justo, vel cursus enim ante ut massa. Praesent eleifend ac ligula ac porttitor. Integer sem lacus, hendrerit quis luctus non, consectetur consectetur nisi. Nam maximus vestibulum enim, eget tincidunt nulla gravida ac. Cras posuere elit non cursus mattis. Mauris enim ante, vulputate id auctor et, ultrices sit amet mauris. Proin vitae dui at sapien sodales venenatis congue sagittis tortor.
    //                     <br><br>
    //                     Nunc viverra aliquet ex at rutrum. Ut mollis lectus at ornare aliquam. Vivamus mollis bibendum mi, sed tempor dolor semper sagittis. Sed scelerisque nunc sapien, sit amet rhoncus nisl eleifend blandit. Nulla facilisi. Fusce faucibus nisl eget sagittis lacinia. Proin venenatis lacinia elit at consequat. Phasellus lacinia nunc laoreet, tempor mauris vitae, dictum mauris.
    //                     <br><br>
    //                     Phasellus non pellentesque quam. Nullam posuere auctor luctus. Morbi varius felis nulla, rutrum auctor ex malesuada et. Quisque convallis id libero a gravida. Morbi vel mollis ante, nec dictum tortor. Vivamus id ex ut elit tempor viverra tincidunt sed ligula. Mauris arcu magna, dapibus eget mollis sit amet, imperdiet vitae urna. Aliquam ornare aliquam mi non aliquam. Morbi tristique ultricies urna, a aliquet leo scelerisque et. In dictum ex quis pulvinar venenatis. In massa est, imperdiet nec tincidunt a, rutrum nec dolor.
                        
    //                     <br><br>
    //                     Vivamus malesuada vitae lacus ac hendrerit. Proin ac finibus nisi. Aenean laoreet fringilla erat in sodales. Praesent felis tellus, hendrerit sed augue id, porta sagittis nulla. Cras cursus ante ac facilisis aliquet. Nunc ac interdum diam. Curabitur porttitor id enim nec viverra. Sed justo dui, faucibus at enim sit amet, tempor placerat enim. Cras in purus quis enim consectetur consectetur.
    //                     <br><br>
    //                     Praesent vitae tempus tellus. Etiam tempor nibh lobortis, pharetra enim in, pretium justo. Aliquam dignissim neque metus, id pellentesque nisi auctor at. Quisque a turpis ut odio commodo fringilla. Integer nec justo id mi porta faucibus. Curabitur scelerisque vel odio id condimentum. Nullam sed lobortis diam, vitae ullamcorper justo.</p>
    //                     <br><br>
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget dignissim magna, vel cursus ex. Fusce sollicitudin, neque nec blandit porta, risus leo molestie justo, vel cursus enim ante ut massa. Praesent eleifend ac ligula ac porttitor. Integer sem lacus, hendrerit quis luctus non, consectetur consectetur nisi. Nam maximus vestibulum enim, eget tincidunt nulla gravida ac. Cras posuere elit non cursus mattis. Mauris enim ante, vulputate id auctor et, ultrices sit amet mauris. Proin vitae dui at sapien sodales venenatis congue sagittis tortor.
    //                     <br><br>
    //                     Nunc viverra aliquet ex at rutrum. Ut mollis lectus at ornare aliquam. Vivamus mollis bibendum mi, sed tempor dolor semper sagittis. Sed scelerisque nunc sapien, sit amet rhoncus nisl eleifend blandit. Nulla facilisi. Fusce faucibus nisl eget sagittis lacinia. Proin venenatis lacinia elit at consequat. Phasellus lacinia nunc laoreet, tempor mauris vitae, dictum mauris.
    //                     <br><br>
    //                     Phasellus non pellentesque quam. Nullam posuere auctor luctus. Morbi varius felis nulla, rutrum auctor ex malesuada et. Quisque convallis id libero a gravida. Morbi vel mollis ante, nec dictum tortor. Vivamus id ex ut elit tempor viverra tincidunt sed ligula. Mauris arcu magna, dapibus eget mollis sit amet, imperdiet vitae urna. Aliquam ornare aliquam mi non aliquam. Morbi tristique ultricies urna, a aliquet leo scelerisque et. In dictum ex quis pulvinar venenatis. In massa est, imperdiet nec tincidunt a, rutrum nec dolor.
                        
    //                     <br><br>
    //                     Vivamus malesuada vitae lacus ac hendrerit. Proin ac finibus nisi. Aenean laoreet fringilla erat in sodales. Praesent felis tellus, hendrerit sed augue id, porta sagittis nulla. Cras cursus ante ac facilisis aliquet. Nunc ac interdum diam. Curabitur porttitor id enim nec viverra. Sed justo dui, faucibus at enim sit amet, tempor placerat enim. Cras in purus quis enim consectetur consectetur.
    //                     <br><br>
    //                     Praesent vitae tempus tellus. Etiam tempor nibh lobortis, pharetra enim in, pretium justo. Aliquam dignissim neque metus, id pellentesque nisi auctor at. Quisque a turpis ut odio commodo fringilla. Integer nec justo id mi porta faucibus. Curabitur scelerisque vel odio id condimentum. Nullam sed lobortis diam, vitae ullamcorper justo.</p>`
    // },
]

export default pressData;