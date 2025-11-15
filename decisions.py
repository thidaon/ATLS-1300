
class Decision():

    def __init__(self,name, cost, time, enjoyment):
        self.name = name
        self.cost = cost
        self.time = time
        self.enjoyment = enjoyment
        self.score = 0
    

    def total_score(self):
        ## get total score of decision

        score = self.cost + 2*self.time + self.enjoyment/2
        self.score = (score/30) * 10 ## normalize to a priority score out of 10
        
        return

class DecisionMaker():

    def __init__(self):

        self.decisions = []
    

    def add_decision(self,decision):

        self.decisions.append(decision)

    
    def give_recommendation(self):

        scores = []

        for decision in self.decisions:

            decision.total_score()

            scores.append(decision)
        
        sorted_scores = sorted(scores, key = lambda obj: obj.score, reverse= True)


        print("Recommended Decision Order\n")

        for i,decision in enumerate(sorted_scores):
            
            score = "{:.2f}".format(decision.score)
            print(f"{i+1}: {decision.name}, : {score}")


    def get_decisions(self):

        print()
        print("Give your activities here!\n")
        done = ""
        while done.lower() != "done":

            option_name = input("Enter name of activity: ")
            option_cost = int(input("Enter cost 1-10: "))

            while option_cost > 10 or option_cost < 1:
                print("Invalid number, enter again")
                option_cost = int(input("Enter cost 1-10: "))

            option_time = int(input("Enter time 1-10: "))

            while option_time > 10 or option_time < 1:
                print("Invalid number, enter again")
                option_time = int(input("Enter time 1-10: "))

            option_enjoyment = int(input("Enter enjoyment 1-10: "))

            while option_enjoyment > 10 or option_enjoyment < 1:
                print("Invalid number, enter again")
                option_enjoyment = int(input("Enter enjoyment 1-10: "))


            decision = Decision(option_name,option_cost,option_time,option_enjoyment)
            self.decisions.append(decision)

            print()
            done = input("Continue or Evaluate (type done to finish, press enter to add another activity): ")
            print()




decision_maker = DecisionMaker()
decision_maker.get_decisions()
decision_maker.give_recommendation()









