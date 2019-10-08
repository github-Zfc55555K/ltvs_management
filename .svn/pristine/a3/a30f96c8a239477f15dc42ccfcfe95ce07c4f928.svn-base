package com.ltvs.util.algorithmic;


import com.ltvs.util.websocket.WebSocket;

public class KnnMain {
	
	/**
	 * 邻近
	 * 
	 * @param N
	 */
	public static void linjin(double[][] N) {
		double r = 0.8;
		double m = 0.2;
		double a;
		int n = N.length;
		double data[][] = new double[6][6];
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				a = shuju(N[i], N[j]);

				data[i][j] = Math.abs(a);
			}
		}
		for (int w = 0; w < n; w++) {
			int count = 0;
			for (int z = 0; z < n; z++) {
				if ((w != z) && (data[w][z] >= r)) {
					count = count + 1;
					if (count > (m * n)) {
						break;
					}
				}
			}
			if (count < (m * n)) {
				WebSocket.msgToWeb.append("电表" + (w + 1) + "是异常的\n");
				
			}
		}
	}

	/**
	 * 处理数据
	 * 
	 * @param y1
	 * @param y2
	 * @return
	 */
	private static double shuju(double[] y1, double[] y2) {
		double c = 0;
		double d = 0;
		double e = 0;
		double m = 0;
		double p = 0;
		int b = y1.length;
		double a = getAvg(y1);
		double f = getAvg(y2);
		for (int i = 0; i < b; i++) {
			c = c + (y1[i] - a) * (y2[i] - f);
			d = d + ((y1[i] - a) * (y1[i] - a));
			e = e + ((y2[i] - f) * (y2[i] - f));
			m = d * e;
		}
		p = c / Math.sqrt(m);
		return p;
	}

	/**
	 * 求数组平均数
	 * 
	 * @param a
	 * @return
	 */
	private static double getAvg(double[] a) {
		double sum = 0;
		for (double t : a) {
			sum += t;
		}
		return sum / a.length;
	}
}
