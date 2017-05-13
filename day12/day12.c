class Student : Person{
    private int[] testScores;  
  
    /*	
    *   Class Constructor
    *   
    *   Parameters: 
    *   firstName - A string denoting the Person's first name.
    *   lastName - A string denoting the Person's last name.
    *   id - An integer denoting the Person's ID number.
    *   scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    
    /*	
    *   Method Name: Calculate
    *   Return: A character denoting the grade.
    */
    // Write your method here
    private int[] scores;
    public Student(string firstName,string lastName,int identification,int[] scores) : base(firstName, lastName, identification)
    {
        this.scores = scores;
    }
    
    public char Calculate()
    {
       int avg = (int)scores.Average();
       if(avg>=90) return 'O';
       else if(avg>=80 && avg<90) return 'E';
       else if(avg>=70 && avg<80) return 'A';
       else if(avg>=55 && avg<70) return 'P';
       else if(avg>=40 && avg<55) return 'D';
       else return 'T';
           
       
    }
}