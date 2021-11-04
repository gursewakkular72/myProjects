import java.io.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class Checkers {
  
	public static String king1 = "****";
	public static String king2 = "1111";
	public static int player1Count = 0;
    public static int player2Count = 0;

	
	public static void main(String[] args)  throws FileNotFoundException{
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		
		String board [] [] = new String [8][8];
		String userInput = "";
		String gamePieces[] =  {"***", "111"};
		String winner = "";
		String data = "";
		String player1Name= "";
		String player2Name = "";
		boolean run = true;
		boolean removed = false;

		int turn = 0;
		displayBoard(board);
		int row, col, removeFromRow, removeFromCol;
		
		System.out.println("Enter your names first then instructions will be displayed.");
		System.out.println("Please Enter 1st player's name: ");
		player1Name = s.nextLine();
		System.out.println("Please Enter 2nd player's name: ");
		player2Name = s.nextLine();
		
		showInstruction(player1Name, player2Name);
		
		while (run) {
		   /////// telling players that its his turn 
			
			if(turn==0) {
				System.out.println("its player 1's turn.");
			}
			if(turn==1) {
				System.out.println("its player 2's turn.");
			}
			//// getting player's move
			
			System.out.println("please Enter a move eg (21-30):");
			userInput = s.nextLine();
			/// checking if input is valid
			
			while(userInput.length()!=5) {
				System.out.println("your input was invalid.");
				if(turn==0) {
					System.out.println("its player 1's turn.");
				}
				if(turn==1) {
					System.out.println("its player 2's turn.");
				}
				System.out.println("please Enter a move again eg (21-30):");
				userInput = s.nextLine();
				
				
			}
			/// exiting the game if the user wants to quit
			
			if(userInput.equals("00000")) {
				winner = "no one";
				insert( player1Name,  player2Name,  winner);
				 data = fetchingDataFromTheFile() ;
				System.out.println(data);
				System.exit(0);
				
			}
			

		/// fetching out Row and columns from userInput	
			
		removeFromRow=Character.getNumericValue(userInput.charAt(0));
		removeFromCol = Character.getNumericValue(userInput.charAt(1));
		row =  Character.getNumericValue(userInput.charAt(3));
		col =  Character.getNumericValue(userInput.charAt(4));
        

		boolean moveIsValid = move( board,  row,  col,  gamePieces[turn],   removeFromRow, removeFromCol);
		boolean removedOutside = removingOpponentPiece( board,  row,  col,   gamePieces[turn],   removeFromRow,  removeFromCol);
		System.out.println("The move is " + moveIsValid);

	/////// checking if move is valid
		
		if(moveIsValid) {
			selectItemAndRemove( board, removeFromRow,  removeFromCol, row,  col,  gamePieces[turn]);
			 removed = removingOpponentPiece( board,  row,  col,   gamePieces[turn],   removeFromRow,  removeFromCol);
			

			display(board);
			turn ^=1;
			
			//// determining the winner
			
			if(player1Count==12 || player2Count==12) {
				
				if(player1Count ==12) {
					System.out.println(winner = player1Name);
				}
				if(player2Count==12) {
					System.out.println(winner = player2Name);
				}
				
				System.out.println(winner + " won the match.");
//				insertingDataIntoFile( player1Name,  player2Name,  winner);
				insert( player1Name,  player2Name,  winner);
				data = fetchingDataFromTheFile() ;
				System.out.println(data);
				System.out.println("the game has ended");
				run = false;
			}
		}
		else {
			System.out.println("Your move was in Valid.");
		}
		
		}
	
		
				
		
				
	}
	
	///// displaying the board after the moves
	
	public static void display(String [][]board ) {
		int verticalCount = 0;
		printingColNumbers( 0,  7); 
		for(int row = 0; row<board.length; row++) {
			    System.out.println("---------------------------------------------------");
			    System.out.print( verticalCount + " |");
			    verticalCount++;
			for(int col = 0; col<board[row].length; col++) {
				
				System.out.printf("%4s%2s",board[row][col] , "|");
			}
			System.out.println();
		}
		System.out.println("----------------------------------------------------");
		
	}
	
	///// displaying the initial board
	
	public static void displayBoard(String [] [] array ) {
		int verticalCount = 0;
		String player1  = "***";
		String player2  = "111";
		printingColNumbers( 0,  7); 
		for(int row = 0; row<array.length; row++) {
			    System.out.println("---------------------------------------------------");
			    System.out.print( verticalCount + " |");
			    verticalCount++;
			for(int col = 0; col<array[row].length; col++) {
				if((col+row)%2!=0 && row<3 ) {
					array[row][col]= player1;
				}
				else if((row+ col)%2!=0 && row>4) {
					array[row][col]= player2;
				}
			    else {
                	array[row][col]= "";
				}
				System.out.printf("%4s%2s",array[row][col] , "|");
			}
			System.out.println();
		}
		System.out.println("---------------------------------------------------");
		
	}
	
	///printing columns 
	public static void printingColNumbers(int start, int end) {
		for(int i = start; i<=end; i++) {
			System.out.printf("%6d", i);
		}
		System.out.println();
	}
	
	//// displaying time and date
	 public static String displayTimeDate() {   
		  
		   String output = " ";
		   DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
		   LocalDateTime now = LocalDateTime.now();  
		   output  = " " + dtf.format(now)+" ";
		   return output;
		  }    
		    
	 ///function for checking moves if they are valid
	 
	 public static boolean move (String [] [] array, int row, int col, String marker,  int removeFromRow, int removeFromCol) {
		 boolean isValid = false;
		String[] playerMarkers = {"***","111"};
		String tempMark1 =playerMarkers[0]; 
		String tempMark2 = playerMarkers[1];
		
		

		 
		if((tempMark1.equals(marker)) && (array[removeFromRow][removeFromCol]==tempMark1) ){
			if (row == removeFromRow+1){
				
		         if(((row+col)%2!=0)  && (row == (removeFromRow+1)) &&(col == (removeFromCol+1)|| (col==removeFromCol-1)) && (array[row][col]=="")) {
		        	 if(row==7) {
		        		 array[row][col]=king1;
		        		 isValid = true;
		        	 }
		        	 else {
		        	 array[row][col]= marker;
		        	 isValid= true;
		        	 }
		         }
		         else {
		        	 isValid =false;
		         }
		  }

			 
		    if((row==removeFromRow+2)&& (col == removeFromCol-2)|| (col == removeFromCol+2)) {
		    	isValid = removingOpponentPiece( array,  row,  col,  marker,   removeFromRow, removeFromCol);
		    }
		 
		} 
		
		if(tempMark2.equals( marker) && (array[removeFromRow][removeFromCol]==tempMark2)) {
			if(row==removeFromRow-1) {
			if(((row+col)%2!=0 )&&( row == (removeFromRow-1)) && (col == (removeFromCol+1)|| (col==removeFromCol-1)) && (array[row][col]=="") ) {
				if(row==0) {

					
					 array[row][col]=king2;
	        		 isValid = true;
				}
				else {

	        	 array[row][col]= marker;
	        	 isValid= true;
				}
	         }
			else {
				isValid = false;
			}
			}
			
			if((row==removeFromRow-2) && (col == removeFromCol-2)|| (col == removeFromCol+2)) {
				 isValid = removingOpponentPiece( array,  row,  col,  marker,   removeFromRow, removeFromCol);
			}
			
		}
			
			if((tempMark1.equals(marker)) && (array[removeFromRow][removeFromCol]==king1)) {
				System.out.println("for king1" + king1 + " its working");
				if((((row+col)%2!=0 )&&( row == (removeFromRow-1)|| row==(removeFromRow+1)) && (col == (removeFromCol+1)|| (col==removeFromCol-1)) && (array[row][col]=="") )) {
					
					array[row][col]=king1;
					isValid = true;

				}
				else {

					isValid = false;
				}
				System.out.println("line 240 has been executed");
				if(((row==removeFromRow-2) || (row==removeFromRow+2)) &&( (col == removeFromCol-2)|| (col == removeFromCol+2))) {

					 isValid = removingOpponentPiece( array,  row,  col,  marker,   removeFromRow, removeFromCol);
				}
			}
			
			if( (tempMark2.equals(marker)) && (array[removeFromRow][removeFromCol]==king2) ){

				if((((row+col)%2!=0 )&&( row == (removeFromRow-1)|| row==(removeFromRow+1)) && (col == (removeFromCol+1)|| (col==removeFromCol-1)) && (array[row][col]=="") )) {
					
					array[row][col]=king2;
					isValid = true;
				
				}
				else {
					isValid = false;
				}
				
				if(((row==removeFromRow-2) || (row==removeFromRow+2)) &&( (col == removeFromCol-2)|| (col == removeFromCol+2))) {
					 isValid = removingOpponentPiece( array,  row,  col,  marker,   removeFromRow, removeFromCol);
				}
			}
			

			
			
			  
		 
		 return isValid;
	 }
	 
	 ///// removing the oppponent's piece
	 public static boolean removingOpponentPiece(String [] [] array, int row, int col, String marker,  int removeFromRow, int removeFromCol) {
		 
	    boolean isValid = false; 
		String[] playerMarkers = {"***","111"};
		String tempMark1 =playerMarkers[0]; 
		String tempMark2 = playerMarkers[1];
		
		
		
		if(tempMark1.equals(marker) ){
		         if(((row+col)%2!=0  && (array[row][col]=="")) &&((col==removeFromCol-2) || (col==removeFromCol+2)) && (row == (removeFromRow+2)) && (array[(row+removeFromRow)/2][(col+removeFromCol)/2])== "111") {
		        	 if(row==7) {
		        		 array[(row+removeFromRow)/2][(col+removeFromCol)/2]= "";
		        		 array[row][col] = king1;

		        		 player1Count++;
		        		 isValid = true;
		        		 
		        		 
		        	 }
		        	 else {
		        	 array[(row+removeFromRow)/2][(col+removeFromCol)/2]= "";
		        	 array[row][col] = marker;
		        	 player1Count++;
		        	 isValid= true;
		        	 }
		         }
		         else {
		        	 isValid =false;
		         }
		}
		         
		 if(tempMark2.equals( marker)) {
		 		if(((row+col)%2!=0  && (array[row][col]=="") ) &&((col==removeFromCol-2) || (col==removeFromCol+2)) &&( row == (removeFromRow-2)) && (array[(row+removeFromRow)/2][(col+removeFromCol)/2])== "***" ){
		 	        	if(row==0) {
		 	        		array[(row+removeFromRow)/2][(col+removeFromCol)/2]= "";
		 	        		array[row][col] = king2;
		 	        		player2Count++;

			        		 isValid = true;
		 	        	}
		 	        	else {
		 	         array[(row+removeFromRow)/2][(col+removeFromCol)/2]= "";
		 	         array[row][col] = marker;
		 	         player2Count++;
		 	         isValid= true;
		 	        	}
		 	        	 
		 	     }
		 		 else {
		 			isValid =false;
		 		 }
		  
		 
		}
		 
		 if(tempMark1.equals(marker) && (array[removeFromRow][removeFromCol]==king1)) {
			 if(((row+col)%2!=0 && (array[row][col]=="")) &&((col==removeFromCol-2) || (col==removeFromCol+2)) &&( row == (removeFromRow-2) || row == (removeFromRow+2)) && (array[(row+removeFromRow)/2][(col+removeFromCol)/2])== "111" ){
				 
				 array[(row+removeFromRow)/2][(col+removeFromCol)/2]= "";
	 	         array[row][col] = king1;
	 	         player1Count++;
	 	         isValid= true;
				 
				 
				 
			 }
		 }
		 
		 if(tempMark2.equals(marker) && (array[removeFromRow][removeFromCol]==king2)) {
			 if(((row+col)%2!=0 && (array[row][col]=="")) &&((col==removeFromCol-2) || (col==removeFromCol+2)) &&( row == (removeFromRow-2) || row == (removeFromRow+2)) && (array[(row+removeFromRow)/2][(col+removeFromCol)/2])== "***" ){
				 
				 array[(row+removeFromRow)/2][(col+removeFromCol)/2]= "";
	 	         array[row][col] = king2;
	 	         player2Count++;
	 	         isValid= true;
				 
				 
				 
			 }
		 }
		
		 
		 
		 return isValid;
		 
	 
	 }
	 
	 /// setting the previous location to empty String when piece moves to a different location
	 
	 public static boolean selectItemAndRemove(String [][] array,int removeFromRow, int removeFromCol,int row, int col, String marker) {
		 
		array[removeFromRow][removeFromCol] = "";
		move( array,  row,  col,  marker,   removeFromRow, removeFromCol);
		
		return true;
	 }
	
	
	
	/// appending data into file
	 
	public static void insert(String Player1Name, String Player2Name, String winner)  {
		FileWriter fw = null;
		BufferedWriter bw = null;
		PrintWriter pw = null;

		
		
		try { 
			fw = new FileWriter("checkers2.txt", true);
			bw = new BufferedWriter(fw); 
			pw = new PrintWriter(bw); 
			
			pw.printf("%-12s%-2s%-12s%-3s%-3s%-3s\n",Player1Name," VS ", Player2Name+" ",winner," won the match",displayTimeDate());
			
			System.out.println("Data Successfully appended into file");
			pw.flush(); 
			}
		catch(IOException e) {
			System.out.println(e.getMessage());
			
			
		}
	}
	
	//fetching data from file and displaying it in the console
	public static String fetchingDataFromTheFile()   {
		
		
		File myFile = new File("checkers2.txt");
		String WhatIsInFile = "";
		Scanner infile= null;
		
		try {
		
			 infile = new Scanner(myFile);
			
			while (infile.hasNextLine()) {
				
				WhatIsInFile += infile.nextLine();
				

				
			}
			
			

		}
		
		catch ( FileNotFoundException e) {
			System.out.println(e.getMessage());
		}
		
		  infile.close();

		  
		  return WhatIsInFile;
		
		}
			
		
	//// function for showing instructions, developer name .
   public static void showInstruction(String player1, String player2) {
		
	   String developer = "Gursewak Singh";
	   
	   String instruction = "The goal of Checkers, or \"Draughts\", is to remove all your opponent's pieces from the board.\n"
	   		+ "Use coordinates (row and column) to move your pieces around the board. Your pieces can only move forward one\n"
	   		+ "tile diagonally. To capture an opponent's piece and remove it from the board, you need to \"jump\" over their\n"
	   		+ "piece with one of yours. Jumping is mandatory, which means you have to jump with one of your pieces if you are able to.\n"
	   		+ "If one of your pieces gets to the opposite side of the board (your opponent's back row).\n"
	   		+ "it will turn into a King. Kings can move and jump diagonally in any direction (remember, your regular pieces can\n"
	   		+ "only move forward). ). Kings can even combine jumps forward and backward on the same turn!.\n"
	   		+ "You win by removing all your opponent's pieces from the board.\n\n"
	   		+ " In this game the co-ordinates are the number on the Left hand side and Top of the board. \n"
	   		+ "On Left Hand side are the rows and on the top are the column numbers.\n"
	   		+ "Player 1 will have  ***  as his piece. Player 1's piece will turn into KING (****) as it reaches the row 7.\n"
	   		+ "Player 2 will have 111 as his piece. Player 2's piece will turn into KING (1111) as it reaches the row 0.\n"
	   		+ "If you want to move a piece you need to enter the location of the Piece that you want to remove for example its row and columns\n"
	   		+ "then Enter the row and columns where you want to move the Piece.\n"
	   		+ " You need to do something like this: 21-30 (Don't miss the negative sign between the numbers otherwise, it will be an invalid move).\n"
	   		+ "Player 1 can use the above given move (21-30) when he/she starts just to see how it works.\n"
	   		+ "If you wish to exit enter 00000 when asked for move.";
	   
	   
	   System.out.println( " Developed by " + developer);
	   System.out.println(instruction);
	   System.out.println();
	 
		
	}
   
   
	
	
	
	

}
