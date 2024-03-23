import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs", { data: data });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/:id", (req, res, next) => {

    let idx = getIndex(req.params.id);

    res.render("blog.ejs", { title: data[idx].title, info: data[idx].info});
    next();
});

const getIndex = (id) => {
    let index;
    for(let i=0; i<data.length; i++)
    {
        if(id === data[i].id)
        {
            index = i;
        }
    }

    return index;
};

const data = [
        {title: "Limited assets", info: `This week, I was thinking about money.

        In early 2024, everyone is using UPI payment systems (Gpay, Phone pe…) and now you can realize money is just a currency which is used for exchange. I mean the other person just want to see some numbers on his screen and he will give you the product or service that you wished for.
        
        I can relate this with my friends playing video games.<br><br>
        
        I see often everyone around me are playing video games. I see playing video games is a complete waste of time, like it really doesn’t matter what’s your rank or how many kills you got, blah blah… Some video games will try to take the most important asset from you and that is TIME. And when you look at time as energy then now they are really taking your TIME and ENERGY. But you only get a limited amount of them and you have to decide whether you spend that on the things which matter or the things which does not matter. 
        <br><br>
        If you really think about playing video games, that is a waste of time but most people keep the real money in the game to buy some bull-shit( diamonds ) just because they can buy some garbage like gun, or skin, or character from the game’s marketplace and show off to other people who are just like him. So now, it’s not just wasting time, it’s spending money and wasting time. But for what? diamonds in the game? If you really think…, those diamonds, characters, skins… are all just graphics for the developer or the company which developed that game. For example let’s just say you keep 100 Rs in to the game to buy 10 diamonds, now the developer at the company will check whether he received 100Rs or not and then accordingly he will just change the number, like from ( Diamond Count: 0 ) to something like (Diamond Count: 10 ). That means they are creating something from thin air and they are charging you for that. They can literally generate trillions of diamonds if they want, it’s just free for them but you as an idiot will pay real money to buy that shit. 
        <br><br>
        Here is why I am kind of relating it to the money that we are using. We work job just because we can save money and to provide our family. If you think about this again, if you work at a company as a normal employee then you are spending most of your important assets aka TIME and ENERGY for someone else. And that someone else will control you by money, a thing which they can create out of thin air and make you to spend your important assets for them and get their work done. 
        <br><br>
        And I think it is slavery. 
        <br><br>
        In the old days the people who work as slaves have to spend most of their time and energy for the owners and at the end they will get food and shelter. And now working as an employee will only get you enough money so that you can buy food and shelter and of course you can also buy some other things because you should feel like you have control over your life ( Fake freedom ). So what essentially happened is, when workers revolted against owners and said we don’t want to work for free, then the owners are like “Ok, now you don’t work for free but you work for money and you only get enough money so that you can buy mostly the same things when you worked for us for free ( food and shelter )”.
        <br><br>
        And money for them is nothing, just like those diamonds for the game company.`, id: "limited_assets"},
        {title: "Action is not enough", info: `You might be doing all those productive things. You might be daily exercising, meditating, reading… but, do you think just doing these things will make the most difference?

        How many times you found yourself distracted from the work that you are supposed to do?
        <br><br>
        The reason is, action alone cannot work. You should have a PURPOSE. Because with purpose, you know what you are doing,.. why you are doing and any distraction cannot pull you off.
        <br><br>
        As Viktor Frankl puts it in <span class="italic">The Will to Meaning</span>,
        <br><br>
        <span class="quote">“Man is pushed by drives but pulled by values.”</span>
        <br><br>
        So when you have the soul purpose, nothing else can pull you and play with you like a puppet. And PURPOSE is essential because the world  where we live today is deliberately increasing our dopamine levels, making us unable to think of our own, pouring tons of distractions in our way.
        <br><br>
        But you can surpass all these things by taking action driven by purpose.`, id: "action_is_not_enough"},
        {title: "Living a lie", info: "It will be controversial if I write about this here but trust me, 99% of you are not living your life.", id: "living_a_lie"},
    ];