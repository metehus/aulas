package core;

import java.util.Scanner;

public class Application {
	public static void main(String... args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Aula 17");
		
		String matricula = "131242314";
		String nome = "Pedro";
		double nota1 = 7.8;
		double nota2 = 5.6;
		
		double notaFinal = (nota1 + nota2) / 2;
		
		System.out.println("Matricula: " + matricula);
		System.out.println("Nome: " + nome);
		
		if (notaFinal >= 6) {
			System.out.println("Aprovado: (x) Sim ( ) Não");
		} else {
			System.out.println("Aprovado: ( ) Sim (x) Não");
		}
	}
}
