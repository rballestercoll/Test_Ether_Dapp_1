
window.ethereum.enable(); // this helps us to connect with the metamask wallet 


    const MoodContractAddress = "0xC899a1e259E3129133b79a248FCca641C4B9D242"
    const MoodContractABI = 
    [
        {
            "inputs": [],
            "name": "getMood",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_mood",
                    "type": "string"
                }
            ],
            "name": "setMood",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
    let MoodContract;
    let signer; //to interact with the transactions

    const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");

    // metamask (1,2,3) 
    provider.send("eth_requestAccounts", []).then(() => {
        provider.listAccounts().then((accounts) => {
          signer = provider.getSigner(accounts[0]);
          MoodContract = new ethers.Contract(
            MoodContractAddress,
            MoodContractABI,
            signer
          );
        });
      });

    // this is a javascript function 
    async function getMood() {
        const getMoodPromise = MoodContract.getMood();
        const Mood = await getMoodPromise;
        document.getElementById("showMood").innerText = `Your Mood: ${Mood}`;
        console.log(Mood);
      }
      
      async function setMood() {
        const mood = document.getElementById("mood").value;
        const setMoodPromise = MoodContract.setMood(mood);
        await setMoodPromise;
      }

      