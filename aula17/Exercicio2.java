import java.util.Scanner;

public class Exercicio2 {
	public static void main(String... args) {
		System.out.println("Aula 17");
		int quantidade = 1;
		
		double[] pesos = {0.05, 0.05, 0.2, 0.2, 0.5};
		
		String[] matriculas = new String[quantidade];
		String[] nomes = new String[quantidade];
		double[][] notas = new double[quantidade][5];
		
		Scanner scanner = new Scanner(System.in);
		
		for (int i = 0; i < quantidade; i++) {
			System.out.println("Aluno " + (i + 1));
			System.out.println("Digite a matricula ");
			matriculas[i] = scanner.nextLine();
			
			System.out.println("Digite o nome");
			nomes[i] = scanner.nextLine();

			int j = 0;
			while (j < 5) {
				System.out.println("Digite a nota " + (j + 1));
				double nota = scanner.nextDouble();
				if (nota >= 0 && nota <= 10) {
					notas[i][j] = nota;
					j++;
				} else {
					System.out.println("Insira um valor entre 0 e 10");
				}
			}
			
			scanner.nextLine();
			
		}
		
		System.out.println("\nResultado\n");
		
		
		for (int i = 0; i < quantidade; i++) {
			System.out.println("\nAluno " + (i + 1));
			
			double notaFinal = 0;
			
			for (int j = 0; j < 5; j++) {
				System.out.println("Nota " + (i + 1) + ": " + notas[i][j]);
				notaFinal += notas[i][j] * pesos[j];
			}
			

			
			
			System.out.println("Matricula: " + matriculas[i]);
			System.out.println("Nome: " + nomes[i]);
			
			System.out.println("Nota final: " + notaFinal);
			if (notaFinal >= 6) {
				System.out.println("Aprovado: (x) Sim ( ) Não");
			} else {
				System.out.println("Aprovado: ( ) Sim (x) Não");
			}
		}
		
		scanner.close();
	}
}
