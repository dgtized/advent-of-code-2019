import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

// javac FFT.java && java FFT input.test
public class FFT {

  public static void debug(int input[], int offset) {
    for(int i = offset; i < offset + 8; i++) {
      System.out.printf("%1d", input[i]);
    }
    System.out.println();
  }

  public static int[] phase(int input[]) {
    int [] output = new int [input.length];
    int [] pattern = new int []{0, 1, 0, -1};

    for(int base = 0; base < input.length; base++) {
      int sum = 0;
      for(int digit = base; digit < input.length; digit++) {
        int offset = (base == 0 ? digit + 1 : (digit + 1) / (base+1));
        int pat = pattern[offset % 4];
        if(pat == 0) {
          digit += base; // skip zero chunks
        } else {
          sum += pat * input[digit];
        }
      }
      sum = Math.abs(sum)%10;
      output[base] = sum;
    }

    return output;
  }

  public static int[] phase2(int input[]) {
    int [] output = new int [input.length];

    int sum = 0;
    // Abuse duplication in tail to add up each FFT row
    for(int i = 0; i < input.length; i++) {
      sum += input[output.length - i - 1];
      output[output.length - i - 1] = Math.abs(sum % 10);
    }

    return output;
  }

  public static void stage1(int input[]) {
    debug(input, 0);
    for(int iters = 0; iters < 100; iters++) {
      input = phase(input);
      //debug(input, 0);
    }
    debug(input, 0);
  }

  public static int messageOffset(int message[]) {
    String r = "";
    for(int i = 0; i < 7; i++) {
      r = r + String.format("%d", message[i]);
    }
    int msgOffset = Integer.parseInt(r);
    System.out.println("Offset: " + msgOffset);
    return msgOffset;
  }

  public static void main(String args[]) {
    File file = new File(args[0]);
    try {
      byte[] bytes = Files.readAllBytes(file.toPath());
      int [] input = new int[bytes.length-1];
      for(int i = 0; i < bytes.length-1; i++) {
        input[i] = bytes[i] - 48;
      }
      stage1(input);
      System.out.println("\n*** STAGE 2 ***");

      int [] message = new int[input.length * 10000];
      for(int i = 0; i < input.length * 10000; i++) {
        message[i] = input[i % input.length];
      }
      int msgOffset = messageOffset(message);

      for(int iters = 0; iters < 100; iters++) {
        message = phase2(message);
        debug(message, 0);
      }
      debug(message, msgOffset);

    } catch(IOException e) {
      e.printStackTrace();
    }
  }
}
