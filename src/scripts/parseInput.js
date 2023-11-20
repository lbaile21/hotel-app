import { useNavigate } from "react-router-dom";

export const parseInput = async (input) => {
    let result = "";
  
    // Check if input contains "KPI"
    if (input.includes("Hawaii")) {
      result = "Sounds great! Are there any activities you would like to explore on your vacation?";
    }
    // Add more conditions as needed
    else if (input.includes("hiking")) {
      result = "Sounds like the perfect trip. I recommended you stay at Marriott's Waikoloa Ocean Club Waikoloa Beach. The resort is on beach front property and there's quick access to Pu'u Wa'awa'a Cinder Cone Hiking Trail. Would you like to see more activities around the resort.";
    }
    else if (input.includes("save")) {
      result = "Yes, I will email you over the working itinerary for each location you explore, so that you can compare your options.";
    }
    else if (input.includes("points")) {
      result = "You currently have 860 points";
    }
    else if (input.includes("tee time")) {
      result = "Done, Victoria. Your confirmation is sitting in your inbox. See you tomorrow at 9am.";
  
    }
    else if (input.includes("sure")) {
        result = "Sounds great!";
    
      }
    else {
      result = "I'm not quite sure, trying asking me another way";
    }
  
    return result;
  };