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

    console.log(data[idx].title);
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
        {title: "Surroundings and Self-analyzing", info: `This week I was thinking about surroundings and behavior.
        <br><br>
        Surroundings and behavior are linked together. Your actions, behavior depends upon your surroundings. And this is effecting me a lot. I am in Kumbakonam for education purpose. And most of the people around me are not like me or not even the persons who I want to be. I don’t hate them, I love them and I will be a very good friend to them but what I dislike is not them.., it’s their behavior in most of the situations. So at the very start I kind of hated everything - going to college, doing college work, etc. - but over the time, I don’t know why but it kind of gone. That doesn’t mean I love doing college work or I love going to college, it’s still the same but it’s like some essence is missing.
        <br><br>
        And almost everyone disrespect women, disrespect teachers, very anxious to talk to girls, very anxious to even go on to the stage and give a normal speech. At first I am not anxious of anything, I kind of have a mindset of not caring what others think.. because they really don’t care about you or whatever you do. But now over the time, that mentality also diluted. And this week when I was questioning myself <span class="italic>Why are these negative thoughts coming into my brain? Why everything seems very normal?</span> 
        <br><br>
        I think the answer to my question is my <span class="italic>surroundings</span>.
        <br><br>
        As motivational speaker Jim Rohn says, 
        <br><br>
        <span class="quote"> “You are the average of the five people you spend the most time with.”</span>
        <br><br>
        
        I am literally living with people who I don’t want to be. I don’t want their habits, I don’t want their behavior, I don’t want their thoughts. But at the end of the day, that is what I am becoming because that’s how nature works. If you have a brother who exercises every single day and takes care of his health don’t you think you will do the same? 
        <br><br>
        You might be thinking you are very strong, nothing can effect you but trust me, these changes are not conscious, they are sub-conscious and you don’t even know when they are created and you don’t even realize that you have changed due to the irrationality that comes with these changes.
        <br><br>
        So now I am planning to create my virtual top 5 people. But I will only listen to those people or watch those people, once a week because I am already doing dopamine detox and getting exposed to social media platforms and their algorithms is very dangerous because they are just designed to grab your attention and snap your time just like that, and you won’t even realize it.
        <br><br>
        I will watch and listen to people who I want to be. I will watch people who have strong mindset, who are perspicacious, who are having nice relationships, who have already passed the struggles and achieved something in their life.
        <br><br>
        And again, I have to observe and analyze myself very closely for these bad habits or behaviors which will sneak into my head. Every time something unfavorable happens, every time something looks like it’s not going the right way,… I have to sit and self-analyze. I have to question my self a lot— <span class="italic">Why that thing happened in the first place? Why did I started talking? How can I sound more confident? How can I improve myself?</span>— and then I have to struggle to find answers to those.
        <br><br>
        As Andrew tate says, 
        <br><br>
        <span class="quote">It’s not practice that makes perfect, it’s practice plus feedback</span>
        <br><br>
        
        So analyzing myself, my behaviors and also the top 5 people’s behaviors and reflecting on those,.. I can improve myself.`, id: "surroundings_and_self_analyzing"},
        {title: "A Source of Negative Impulses", info: `This week it is again about surroundings.
        <br><br>
        I feel like demon or demoniac nature will act on us through surroundings. 
        <br><br>
        I have been doing partial dopamine detox for almost 5 months. I call it partial because whenever I get a chance to visit my home town and spend some time in home, I stop dopamine detox completely and act like a fool. And when I am back to Kumbakonam, I will start the detox again and it is also partial because I kind of open instagram to view some people who have some characteristics that I deliberately want. 
        <br><br>
        So, all those five months I did not talked too much to the people around me — the people who I don’t want to become. But almost in the end of February, I kind of started talking to people around me, I started to listen to the shit that they talk,… and it continued until the first week of April and what I experienced in this first week of April is utterly asinine. 
        <br><br>
        Every impulse that is satanic is attacking me more than ever before. I believe that nature has given us the power to defend ourselves from those impulses but it is not normal to have negative impulses in regular intervals. And I certainly think that the root cause for all of this is my surroundings. 
        <br><br>
        These thoughts are very sticky. When ever I hear something about negativity or disrespectfulness or aimlessness, the devil will try to attack me through those areas. If you are talking to someone and he begins to talk about negative emotions or starts to give excuses or tells that he kind of don’t have any plan for his future… then you have to be cautious because from there the demonic thoughts or impulses begin to attack you. Not only there, whenever I look someone who is simply wasting their time, the negative impulses will also try to attack me from those places. 
        <br><br>
        And it’s not a one time attack. As I said, it sticks with you and constantly attacks you until it drains some of your thought energy and time. You have to be cautious about these negative impulses because these will lead to bad habits. And irrationality will make you think that you are going in the right way. 
        <br><br>
        So I think to get rid of these negative impulses, you have to cut all the sources from which they try to attack you. Don’t be a nice friend, instead be a good friend to others. If you find your friend is not working and don’t have a goal then try to explain him simply that it is bad and he should definitely start working on something before it get’s too late.
        <br><br>
        Remember, don’t judge people but judge their habits.`, id: "a_source_of_negative_impulses"},
    ];